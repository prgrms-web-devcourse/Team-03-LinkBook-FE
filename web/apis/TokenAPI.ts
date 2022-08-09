import axios from '.';
import { REFRESH_TOKEN } from './url';

// RefreshToken 이용 AccessToken 재생성
export const getAccessToken = async () => {
  const res = await axios.get(`${REFRESH_TOKEN}`); // Access Token header 추가 필요

  console.log(res);
  return res;
};
