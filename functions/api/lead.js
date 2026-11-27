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
  return json(request, { ok: true, receivedAt });
}
