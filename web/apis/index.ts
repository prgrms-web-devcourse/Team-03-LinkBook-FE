import { API } from './url';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const { data } = res;
      return data;
    }

    throw new Error(JSON.stringify(res));
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default axios;
