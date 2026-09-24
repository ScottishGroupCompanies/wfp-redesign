type RequestLike = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  on: (event: 'data' | 'end' | 'error', listener: (...args: any[]) => void) => void;
};

type ResponseLike = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => ResponseLike;
  json: (body: unknown) => void;
  redirect: (statusCode: number, url: string) => void;
};

type TurnstileResult = { success: boolean; action?: string; hostname?: string };

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const ZOHO_WEB_TO_LEAD_URL = 'https://crm.zoho.com/crm/WebToLeadForm';
const ALLOWED_HOSTNAMES = new Set(
  (process.env.TURNSTILE_ALLOWED_HOSTNAMES || 'windowfilmphiladelphia.net,www.windowfilmphiladelphia.net')
    .split(',')
    .map((hostname) => hostname.trim())
    .filter(Boolean),
);

function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }
function value(params: URLSearchParams, name: string) { return (params.get(name) || '').trim(); }

function readBody(request: RequestLike): Promise<string> {
  if (typeof request.body === 'string') return Promise.resolve(request.body);
  if (request.body && typeof request.body === 'object') {
    return Promise.resolve(new URLSearchParams(
      Object.entries(request.body as Record<string, unknown>)
        .filter(([, fieldValue]) => typeof fieldValue === 'string') as [string, string][],
    ).toString());
  }
  return new Promise((resolve, reject) => {
    const chunks: string[] = [];
    request.on('data', (chunk: unknown) => chunks.push(String(chunk)));
    request.on('end', () => resolve(chunks.join('')));
    request.on('error', reject);
  });
}

function send(response: ResponseLike, request: RequestLike, status: number, body: Record<string, string>) {
  response.setHeader('Cache-Control', 'no-store');
  if ((first(request.headers.accept) || '').includes('application/json')) {
    response.status(status).json(body);
    return;
  }
  response.redirect(303, status < 400 ? '/thank-you/' : '/contact/?status=error');
}

function buildDescription(details: string, projectType: string, filmCategory: string, serviceInterest: string, preferredDate: string) {
  const rows = [details, '', '--- Project Details ---', `Project Type: ${projectType || 'Not provided'}`, `Film Category: ${filmCategory || serviceInterest || 'Not provided'}`];
  if (preferredDate) rows.push(`Preferred Date: ${preferredDate}`);
  return rows.join('\n');
}

async function validateTurnstile(token: string, remoteIp: string | undefined, secret: string): Promise<TurnstileResult> {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);
  const result = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body, signal: AbortSignal.timeout(10_000) });
  if (!result.ok) return { success: false };
  return result.json() as Promise<TurnstileResult>;
}

export default async function handler(request: RequestLike, response: ResponseLike) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    send(response, request, 405, { error: 'Method not allowed.' });
    return;
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not configured.');
    send(response, request, 503, { error: 'The form is temporarily unavailable. Please call us instead.' });
    return;
  }

  try {
    const params = new URLSearchParams(await readBody(request));
    const token = value(params, 'cf-turnstile-response');
    const hostname = first(request.headers.host)?.split(':')[0];
    const remoteIp = first(request.headers['x-forwarded-for'])?.split(',')[0]?.trim();
    if (!token || token.length > 2048 || !hostname || !ALLOWED_HOSTNAMES.has(hostname)) {
      send(response, request, 400, { error: 'Please complete the verification and try again.' });
      return;
    }

    const verification = await validateTurnstile(token, remoteIp, secret);
    if (!verification.success || verification.action !== 'contact' || !verification.hostname || !ALLOWED_HOSTNAMES.has(verification.hostname)) {
      send(response, request, 400, { error: 'Verification expired or failed. Please try again.' });
      return;
    }

    // Retain the honeypot as a quiet secondary signal.
    if (value(params, '_honey')) {
      send(response, request, 200, { success: 'Thank you. We will be in touch shortly.' });
      return;
    }

    const fullName = value(params, 'name');
    const suppliedFirstName = value(params, 'first_name');
    const suppliedLastName = value(params, 'last_name');
    const [firstFromName = '', ...remainingName] = fullName.split(/\s+/).filter(Boolean);
    const firstName = suppliedFirstName || firstFromName;
    const lastName = suppliedLastName || remainingName.join(' ') || '-';
    const email = value(params, 'email');
    const phone = value(params, 'phone');
    const projectType = value(params, 'project_type') || value(params, 'property_type');
    const filmCategory = value(params, 'film_type');
    const serviceInterest = value(params, 'service_interest');
    const preferredDate = value(params, 'preferred_date');
    const details = value(params, 'message');
    if (!firstName || !email || !projectType) {
      send(response, request, 400, { error: 'Please complete the required fields and try again.' });
      return;
    }

    const zohoFields = new URLSearchParams({
      xnQsjsdp: '325aec352fca48630f82c839c082a7aa9196cea28dfcc9e80957434ae4a1b82a',
      xmIwtLD: 'f0bb62d4e0d3507553760024d3e14e099546427dcdc85266704c37d416384aced18465ecf42623da5b55800cb7b24914',
      actionType: 'TGVhZHM=', returnURL: 'https://windowfilmphiladelphia.net/thank-you/', zc_gad: '', aG9uZXlwb3Q: '',
      'First Name': firstName.slice(0, 100), 'Last Name': lastName.slice(0, 100), Email: email.slice(0, 254), Phone: phone.slice(0, 100), Company: '',
      LEADCF29: projectType.slice(0, 100) || '-None-', LEADCF28: (filmCategory || serviceInterest || '-None-').slice(0, 100),
      Description: buildDescription(details, projectType, filmCategory, serviceInterest, preferredDate).slice(0, 30_000),
      'Lead Status': 'New', LEADCF5: 'Web Form', LEADCF4: 'Website', LEADCF7: 'www.windowfilmphiladelphia.net', LEADCF8: '-None-',
    });

    const zohoResponse = await fetch(ZOHO_WEB_TO_LEAD_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: zohoFields, signal: AbortSignal.timeout(10_000),
    });
    if (!zohoResponse.ok) {
      console.error('Zoho Web-to-Lead submission failed:', zohoResponse.status);
      send(response, request, 502, { error: 'We could not send your request. Please try again or call us.' });
      return;
    }
    send(response, request, 200, { success: 'Thank you. We will be in touch shortly.' });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    send(response, request, 500, { error: 'We could not send your request. Please try again or call us.' });
  }
}
