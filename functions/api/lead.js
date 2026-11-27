// Cloudflare Pages Function -> mounted at POST /api/lead
// Optional env var: LEAD_WEBHOOK_URL (Google Apps Script / Make / Zapier / Slack / CRM)

const ALLOWED_ORIGINS = ['https://xaxisoverseas.com', 'https://www.xaxisoverseas.com'];
const MAX_BYTES = 8192;
const FIELDS = ['name', 'phone', 'email', 'intake', 'qualification', 'english', 'target', 'notes', 'source'];

function corsFor(request) {
  const origin = request.headers.get('Origin');
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
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

// Trim, cap length, strip leading spreadsheet-formula characters
function clean(value, max) {
  return String(value ?? '')
    .trim()
    .slice(0, max)
    .replace(/^[=+\-@\s]+/, '');
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

  const rows = [
    ['Name', esc(lead.name)],
    ['Phone', `<a href="tel:+${esc(lead.phone)}">${esc(lead.phone)}</a> &middot; <a href="https://wa.me/${esc(lead.phone)}">WhatsApp</a>`],
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
  for (const f of FIELDS) lead[f] = clean(data[f], f === 'notes' ? 500 : 200);

  const digits = lead.phone.replace(/\D/g, '');
  if (!lead.name || digits.length < 10 || digits.length > 15 || /^0+$/.test(digits)) {
    return json(request, { ok: false, error: 'Name and valid phone are required' }, 400);
  }
  lead.phone = digits;

  const receivedAt = new Date().toISOString();
  const emailSent = await sendZeptoMail(context.env, lead, receivedAt);
  const url = context.env && context.env.LEAD_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, receivedAt, site: 'xaxisoverseas.com' }),
      });
    } catch {
      // Never fail the visitor because of a webhook problem
    }
  }
  return json(request, { ok: true, emailSent, receivedAt });
}
