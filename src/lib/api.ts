const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  } catch {
    throw new Error('Ба сервер пайваст шуда нашуд. Backend-ро фаъол кунед.');
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data?.detail;
    const message = Array.isArray(detail)
      ? detail.map((item: { msg?: string }) => item.msg || 'Маълумоти нодуруст').join(', ')
      : typeof detail === 'string'
        ? detail
        : 'Хатогӣ ҳангоми фиристодани дархост';
    throw new Error(message);
  }

  return data as T;
}
