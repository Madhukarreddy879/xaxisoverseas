# X-Axis Overseas — xaxisoverseas.com

UK study-abroad consultancy website (Next.js static export, Tailwind CSS) for Cloudflare Pages.

## Update contact details
Edit **one file**: `src/config/site.ts` (phone, WhatsApp number, email, office hours, address).

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages
1. Push this repo to GitHub / GitLab.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. **Custom domains** → add `xaxisoverseas.com` and `www.xaxisoverseas.com` (SSL is automatic).
5. Optional: set env var `LEAD_WEBHOOK_URL` (Google Apps Script / Make / Zapier / Slack / CRM) so
   `functions/api/lead.js` forwards every enquiry. Without it, leads still reach you via the
   WhatsApp / call buttons shown after form submission.

### Cloudflare Workers (Static Assets) deploy
If Cloudflare created a **Worker** project (deploy command `npx wrangler deploy`), it works out of
the box: `wrangler.jsonc` serves `./out` and `worker.js` handles `POST /api/lead`.
Use build command `npm run build` and deploy command `npx wrangler deploy`.
Set `LEAD_WEBHOOK_URL` as a Worker variable/secret.

### Enquiry emails (Zoho CPaaS / ZeptoMail)
Each enquiry is emailed from `info@xaxisoverseas.com` to the admissions inbox (see `vars` in `wrangler.jsonc`).
Add the API key as a **Secret** (never commit it): Cloudflare Dashboard → Workers & Pages → `xaxisoverseas`
→ Settings → Variables and Secrets → Add → Type **Secret**, name `ZEPTOMAIL_API_KEY`, value `Zoho-enczapikey …`.
For local testing put it in `.dev.vars` (gitignored).
The sender domain `xaxisoverseas.com` must be verified in the ZeptoMail/CPaaS agent.

## Before launch
- Replace sample testimonials in `src/data/ukData.ts` with real ones.
- Verify university fees, scholarships and UKVI figures against official sources.
