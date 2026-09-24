# Cloudflare Turnstile setup

The contact forms now submit only to `/api/contact`. That Vercel Function validates a Cloudflare Turnstile token first, then forwards verified leads to the existing Zoho CRM Web-to-Lead form.

## One-time account setup

1. In Cloudflare, open **Turnstile** and create a Managed widget.
2. Add both `windowfilmphiladelphia.net` and `www.windowfilmphiladelphia.net` as allowed hostnames.
3. In Vercel → this project → **Settings → Environment Variables**, add these variables for **Production**:
   - `PUBLIC_TURNSTILE_SITE_KEY`: the public site key from Cloudflare.
   - `TURNSTILE_SECRET_KEY`: the secret key from Cloudflare. Never put this value in source control or in a public browser variable.
4. Redeploy after adding the variables.

For a preview deployment, use a separate Turnstile widget and add that preview hostname to `TURNSTILE_ALLOWED_HOSTNAMES` as a comma-separated value. Do not reuse the production secret with an untrusted preview environment.

## Verification checklist

1. Submit each website form using a real browser and confirm one new Lead arrives in Zoho CRM.
2. In Cloudflare Turnstile analytics, confirm that validation requests are recorded.
3. Try submitting with the widget unanswered or an expired token. The form must not create a Zoho Lead.

Cloudflare Turnstile requires server-side validation; rendering the widget alone does not block direct spam submissions.
