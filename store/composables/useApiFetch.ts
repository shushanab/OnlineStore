type ApiOption = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  params?: any;
};

export default async (url: string, options: ApiOption = { method: 'GET' }) => {
  const runtimeConfig = useRuntimeConfig();
  const accessToken = runtimeConfig.public.token;
  const baseURL = runtimeConfig.public.baseUrl + runtimeConfig.public.storeID;

  const { error, data } = await useFetch(url, {
    baseURL: baseURL,
    async onRequest({ options }) {
      if (accessToken) {
        options.headers = new Headers(options.headers);
        options.headers.set('Authorization', `Bearer ${accessToken}` || '');
      }
    },
    ...options,
  });

  return { error, data };
};
