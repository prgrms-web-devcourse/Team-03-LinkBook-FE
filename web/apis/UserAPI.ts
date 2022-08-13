import axios from '.';
import { USER, SIGNUP, LOGIN, GET_USER_DATA } from './url';
import type { LogIn, MyInfo, SignUpOrIn, UpdateInfo } from '../types';

// 회원가입
export const userSignUp = async ({ email, password }: SignUpOrIn) => {
  console.log(email, password);
  const res = await axios.post(`${USER}${SIGNUP}`, {
    email,
    password,
    image:
      'https://linkbook-s3-1.s3-ap-northeast-2.amazonaws.com/static/userImage.png.png',
  });

  console.log(res);
  return res;
};

// 로그인
export const userLogin = async ({ email, password }: SignUpOrIn) => {
  console.log(email, password);
  const res = await axios.post(`${USER}${LOGIN}`, {
    email,
    password,
  });

  console.log(res);
  return res as unknown as LogIn;
};

//내 정보 조회
export const getUserInfo = async (token: string) => {
  const res = await axios.get(`${USER}${GET_USER_DATA}`, {
    headers: {
      'Access-Token': token,
    },
  });

  console.log(res);
  return res as unknown as MyInfo;
};

// 내 정보 수정 성공
export const updateUserInfo = async (
  { name, image, introduce, interests }: UpdateInfo,
  token: string,
) => {
  const res = await axios.patch(
    `${USER}`,
    {
      name,
      image,
      introduce,
      interests,
    },
    {
      headers: {
        'Access-Token': token,
      },
    },
  );

  console.log(res);
  return res;
};
