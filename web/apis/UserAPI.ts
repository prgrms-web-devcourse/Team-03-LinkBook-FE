import axios from '.';
import { LogIn } from '../types';
import { USER, SIGNUP, LOGIN, GET_USER_DATA } from './url';

// 회원가입
export const userSignUp = async (email: string, password: string) => {
  const res = await axios.post(`${USER}${SIGNUP}`, {
    email,
    password,
    image: 'https://avatars.githubusercontent.com/u/72294509?v=4',
  });

  console.log(res);
  return res;
};

// 로그인
export const userLogin = async (email: string, password: string) => {
  console.log(email, password);
  const res = await axios.post(`${USER}${LOGIN}`, {
    email,
    password,
  });

  console.log(res);
  return res as unknown as LogIn;
};

// 로그아웃

//내 정보 조회
export const getUserInfo = async () => {
  const res = await axios.get(`${USER}${GET_USER_DATA}`);

  console.log(res);
  return res;
};

interface FieldProps {
  field: string;
}

// 내 정보 수정 성공
export const updateUserInfo = async (
  name: string,
  image: string,
  interests: Array<FieldProps>,
) => {
  const res = await axios.patch(`${USER}`, {
    name,
    image,
    interests,
  });

  console.log(res);
  return res;
};
