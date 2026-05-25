import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import config from '../../../../keystatic.config';
import type { APIRoute } from 'astro';

function fixRequestUrl(request: Request): Request {
  const url = new URL(request.url);
  if (url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') return request;

  const forwardedHost = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https';

  if (!forwardedHost || forwardedHost.startsWith('localhost')) {
    const keystatic_url = import.meta.env.KEYSTATIC_URL as string | undefined;
    if (keystatic_url) {
      const base = new URL(keystatic_url);
      url.hostname = base.hostname;
      url.port = base.port || '';
      url.protocol = base.protocol;
    }
  } else {
    const [host, port] = forwardedHost.split(':');
    url.hostname = host;
    url.port = port || '';
    url.protocol = forwardedProto + ':';
  }

  return new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    duplex: 'half',
  } as RequestInit & { duplex: string });
}

export const ALL: APIRoute = async (context) => {
  const handler = makeGenericAPIRouteHandler(
    { config },
    { slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG' }
  );

  const fixedRequest = fixRequestUrl(context.request);
  const { body, headers, status } = await handler(fixedRequest);

  let headersMap = new Map<string, string[]>();
  if (headers) {
    if (Array.isArray(headers)) {
      for (const [key, value] of headers) {
        const k = key.toLowerCase();
        if (!headersMap.has(k)) headersMap.set(k, []);
        headersMap.get(k)!.push(value);
      }
    } else if (typeof (headers as Headers).entries === 'function') {
      for (const [key, value] of (headers as Headers).entries()) {
        headersMap.set(key.toLowerCase(), [value]);
      }
      if ('getSetCookie' in headers && typeof (headers as any).getSetCookie === 'function') {
        const sc = (headers as any).getSetCookie() as string[];
        if (sc?.length) headersMap.set('set-cookie', sc);
      }
    } else {
      for (const [key, value] of Object.entries(headers as Record<string, string>)) {
        headersMap.set(key.toLowerCase(), [value]);
      }
    }
  }

  const setCookieHeaders = headersMap.get('set-cookie');
  headersMap.delete('set-cookie');

  if (setCookieHeaders) {
    for (const raw of setCookieHeaders) {
      const { name, value, ...options } = parseString(raw);
      const sameSite = options.sameSite?.toLowerCase() as 'lax' | 'strict' | 'none' | undefined;
      context.cookies.set(name, value, {
        domain: options.domain,
        expires: options.expires,
        httpOnly: options.httpOnly,
        maxAge: options.maxAge,
        path: options.path,
        sameSite: sameSite === 'lax' || sameSite === 'strict' || sameSite === 'none' ? sameSite : undefined,
      });
    }
  }

  return new Response(body, {
    status,
    headers: [...headersMap.entries()].flatMap(([key, vals]) => vals.map((v) => [key, v])),
  });
};

export const prerender = false;
