import { useRef } from 'react';
import { RateLimiter } from 'limiter';

const API_URL: string = 'https://api.discogs.com';

function useDiscogsFetch() {
  const limiter = useRef(new RateLimiter({ tokensPerInterval: 24, interval: 'minute' }));

  return async <T, B>(
    url: string,
    path: string | undefined = undefined,
    method = 'get',
    body: B | undefined = undefined,
    headers = {}
  ): Promise<T | { error: string }> => {
    const controller = new AbortController();
    const isJsonBody = typeof body === 'object';
    try {
      console.log('tokens remaining', limiter.current.getTokensRemaining());
      await limiter.current.removeTokens(isJsonBody ? 2 : 1); // additional preflight request if 'application/json'
      console.log('post await tokens remaining', limiter.current.getTokensRemaining());

      const res = await fetch(path === undefined ? `${url}` : `${API_URL}${path}`, {
        method: method.toUpperCase(),
        signal: controller.signal,
        body: isJsonBody ? JSON.stringify(body) : undefined,
        mode: 'cors',
        headers: {
          'Content-type': isJsonBody ? 'application/json' : 'text/plain; charset=utf-8',
          ...headers,
        },
      });
      if (!res.ok) {
        const error = await res.json();
        return { error: error.code };
      }
      return await res.json();
    } catch (err) {
      return { error: err };
    } finally {
      controller.abort();
    }
  };
}

export default useDiscogsFetch;
