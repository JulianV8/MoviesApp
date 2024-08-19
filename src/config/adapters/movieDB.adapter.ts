import {AxiosAdapter} from './http/axios-adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '953055cc28e42bda7bf4cd708db64ae9',
    language: 'es',
  },
});
