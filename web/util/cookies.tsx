import nookies, { parseCookies } from 'nookies';

export const setCookies = (key: string, value: string, path: string) => {
  try {
    nookies.set(null, key, value, { path });
  } catch (error) {
    console.error(error);
  }
};

export const getCookie = (key: string) => {
  const cookie = parseCookies();
  try {
    if (cookie && cookie[key]) {
      return cookie[key];
    }
    throw new Error('존재하지 않는 쿠키 입니다.');
  } catch (error) {
    console.error(error);
  }
};

export const removeCookie = (key: string) => {
  try {
    if (getCookie(key)) {
      nookies.destroy(null, key, { path: '/' });
      return;
    }
    throw new Error('존재하지 않는 쿠키 입니다.');
  } catch (error) {
    console.error(error);
  }
};
