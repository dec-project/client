import axios, { AxiosInstance } from 'axios';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const createApiInstance = (path: string, requireAuth: boolean = false) => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${path}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (requireAuth) {
    instance.interceptors.request.use(requestInterceptor);
  }
  instance.interceptors.response.use(successInterceptor, errorInterceptor);

  return instance;
};

// TODO: weather api 주소 변경 후 수정
export const calendarInstance = createApiInstance('calendar', false);
// export const searchInstance = createApiInstance('search', false);
export const searchInstance = createApiInstance('', false);
export const rankingInstance = createApiInstance('ranking', false);
