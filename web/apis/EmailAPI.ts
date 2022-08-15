import axios from '.';
import { EMAIL, VERIFY_EMAIL_KEY } from './url';

// 이메일 인증 요청
export const requestEmailKey = async (email: string) => {
  const res = await axios.post(`${EMAIL}`, {
    email,
  });

  return res;
};

// 이메일 인증 번호 확인
export const validateEmailKey = async (email: string, key: string) => {
  const res = await axios.post(`${EMAIL}${VERIFY_EMAIL_KEY}`, {
    email,
    key,
  });

  return res;
};
