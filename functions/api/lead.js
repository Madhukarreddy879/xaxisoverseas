// Cloudflare Pages Function -> mounted at POST /api/lead
// Optional env var: LEAD_WEBHOOK_URL (Google Apps Script / Make / Zapier / Slack / CRM)

const ALLOWED_ORIGINS = ['https://xaxisoverseas.com', 'https://www.xaxisoverseas.com'];
const MAX_BYTES = 8192;
const FIELDS = ['name', 'phone', 'email', 'intake', 'qualification', 'english', 'target', 'notes', 'source'];

export function corsFor(request) {
  const origin = request.headers.get('Origin');
  const sameOrigin = origin && origin === new URL(request.url).origin;
  const allow = origin && (ALLOWED_ORIGINS.includes(origin) || sameOrigin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

const json = (request, body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsFor(request) },
  });

// Trim, cap length, strip leading spreadsheet-formula characters.
// Single-line fields have CR/LF collapsed (prevents header injection); notes keep line breaks.
function clean(value, max, multiline = false) {
  const text = String(value ?? '');
  const normalised = multiline
    ? text.replace(/\r\n?/g, '\n')
    : text.replace(/[\r\n]+/g, ' ');
  return normalised.trim().slice(0, max).replace(/^[=+\-@\s]+/, '');
}

// Lightweight per-isolate rate limit (best effort; add a Cloudflare WAF rate-limit rule for hard limits)
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map();
function rateLimited(request) {
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return false;
  const now = Date.now();
  if (hits.size > 500) {
    for (const [k, v] of hits) if (now - v.start > RATE_WINDOW_MS) hits.delete(k);
  }
  const entry = hits.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function onRequestOptions({ request }) {
  return new Response(null, { status: 204, headers: corsFor(request) });
}

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Sends the enquiry to the admissions inbox via Zoho CPaaS / ZeptoMail.
// Never throws and never logs the API key.
async function sendZeptoMail(env, lead, receivedAt) {
  if (!env || !env.ZEPTOMAIL_API_KEY) return false;
  const rawKey = String(env.ZEPTOMAIL_API_KEY).trim();
  const authHeader = rawKey.startsWith('Zoho-enczapikey ') ? rawKey : `Zoho-enczapikey ${rawKey}`;
  const alias = env.ZEPTOMAIL_AGENT_ALIAS || '7cfc3c65bb67e8ee';

  // 10-digit Indian mobiles get the +91 country code so tel:/wa.me links work
  const intlPhone = lead.phone.length === 10 && /^[6-9]/.test(lead.phone) ? '91' + lead.phone : lead.phone;
  const rows = [
    ['Name', esc(lead.name)],
    ['Phone', `<a href="tel:+${esc(intlPhone)}">${esc(lead.phone)}</a> &middot; <a href="https://wa.me/${esc(intlPhone)}">WhatsApp</a>`],
    ['Email', esc(lead.email)],
    ['Intake', esc(lead.intake)],
    ['Qualification', esc(lead.qualification)],
    ['English status', esc(lead.english)],
    ['Interested in', esc(lead.target)],
    ['Notes', esc(lead.notes)],
    ['Source', esc(lead.source)],
    ['Received at', esc(receivedAt)],
    ['Agent alias', esc(alias)],
  ];
  const htmlbody =
    `<div style="font-family:Arial,sans-serif;max-width:600px">` +
    `<div style="background:#0A192F;color:#fff;padding:14px 18px;font-size:18px;font-weight:bold">New UK Study Enquiry</div>` +
    `<table style="width:100%;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8f7f4;width:150px"><b>${k}</b></td>` +
          `<td style="padding:8px 12px;border:1px solid #e2e8f0">${v || '-'}</td></tr>`,
      )
      .join('') +
    `</table></div>`;
  const textbody = rows.map(([k]) => k).map((k, i) => `${k}: ${[
    lead.name, lead.phone, lead.email, lead.intake, lead.qualification, lead.english,
    lead.target, lead.notes, lead.source, receivedAt, alias,
  ][i] || '-'}`).join('\n');

  const payload = {
    from: { address: env.ZEPTOMAIL_FROM || 'info@xaxisoverseas.com', name: 'X-Axis Overseas Website' },
    to: [{ email_address: { address: env.ZEPTOMAIL_TO || 'campussconnects@gmail.com', name: 'X-Axis Admissions' } }],
    subject: `New UK Enquiry: ${lead.name} (${lead.phone})${lead.intake ? ` — ${lead.intake} Intake` : ''}`,
    htmlbody,
    textbody,
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    payload.reply_to = [{ address: lead.email, name: lead.name }];
  }

  try {
    const res = await fetch(env.ZEPTOMAIL_API_URL || 'https://cpaas.zoho.in/v1.1/email', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: authHeader },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error('ZeptoMail error', res.status, (await res.text()).slice(0, 500));
      return false;
    }
    return true;
  } catch (err) {
    console.error('ZeptoMail request failed', String(err && err.message));
    return false;
  }
}

export async function onRequestPost(context) {
  const { request } = context;

  const origin = request.headers.get('Origin');
  if (origin && !ALLOWED_ORIGINS.includes(origin) && origin !== new URL(request.url).origin) {
    return json(request, { ok: false, error: 'Forbidden' }, 403);
  }

  if (rateLimited(request)) {
    return json(request, { ok: false, error: 'Too many requests. Please try again in a minute.' }, 429);
  }

  const declared = Number(request.headers.get('Content-Length') || 0);
  if (declared > MAX_BYTES) return json(request, { ok: false, error: 'Payload too large' }, 413);

  let raw;
  try {
    raw = await request.text();
  } catch {
    return json(request, { ok: false, error: 'Bad request' }, 400);
  }
  if (raw.length > MAX_BYTES) return json(request, { ok: false, error: 'Payload too large' }, 413);

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return json(request, { ok: false, error: 'Invalid JSON' }, 400);
  }
  if (!data || typeof data !== 'object') return json(request, { ok: false, error: 'Invalid JSON' }, 400);

  // Honeypot: bots fill this hidden field. Pretend success, do nothing.
  if (String(data.website || '').trim()) return json(request, { ok: true });

  const lead = {};
  for (const f of FIELDS) lead[f] = clean(data[f], f === 'notes' ? 500 : 200, f === 'notes');

  const digits = lead.phone.replace(/\D/g, '');
  if (!lead.name || digits.length < 10 || digits.length > 15 || /^0+$/.test(digits)) {
    return json(request, { ok: false, error: 'Name and valid phone are required' }, 400);
  }
  lead.phone = digits;

  const receivedAt = new Date().toISOString();
  const url = context.env && context.env.LEAD_WEBHOOK_URL;
  const sendWebhook = async () => {
    if (!url) return;
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, receivedAt, site: 'xaxisoverseas.com' }),
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      // Never fail the visitor because of a webhook problem
    }
  };
  const [emailSent] = await Promise.all([sendZeptoMail(context.env, lead, receivedAt), sendWebhook()]);
  return json(request, { ok: true, emailSent, receivedAt });
}
