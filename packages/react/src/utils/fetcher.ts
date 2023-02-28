export const fetcher = <JSON = any>(input: RequestInfo | URL, init?: RequestInit): Promise<JSON> => {
  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
    },
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json();
    }

    return res.json();
  });
};
