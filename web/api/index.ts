import { BASE_URL } from './url';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: BASE_URL,
});

export default axios;
