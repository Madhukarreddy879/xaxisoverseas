// Cloudflare Worker entry (Workers Static Assets).
// Serves the static export in ./out and handles POST /api/lead.
import { onRequestOptions, onRequestPost } from './functions/api/lead.js';

const jsonResponse = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/lead' || pathname === '/api/lead/') {
      if (request.method === 'OPTIONS') return onRequestOptions({ request });
      if (request.method === 'POST') {
        return onRequestPost({ request, env, waitUntil: ctx?.waitUntil?.bind(ctx) });
      }
      return jsonResponse({ ok: false, error: 'Method not allowed' }, 405);
    }

    if (pathname.startsWith('/api/')) {
      return jsonResponse({ ok: false, error: 'Not found' }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
