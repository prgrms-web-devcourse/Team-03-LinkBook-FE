import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, REFRESH_TOKEN, URL } from "./constants";
import { getCookie, setCookie } from "./cookies";
import { LogInResponse, SignUpOrIn } from "./types";
import { LOGIN, USER } from "./url";
import { BaseUrl } from "./url";

// access 토큰 재발급 함수
export const onReissuanceAccessToken = async () => {
  try {
    const AccessToken = await getCookie(ACCESS_TOKEN, URL);
    const RefreshToken = await getCookie(REFRESH_TOKEN, URL);
    const res = await axios.get(`${BaseUrl}/refresh-token`, {
      headers: {
        "Access-Token": AccessToken as string,
        "Refresh-Token": RefreshToken as string,
      },
    });
    console.log(res);

    return res.data.accessToken;
  } catch (error) {}
};

// 쿠키 확인함수
export const cookieCheck = async () => {
  //access token 유효기간 확인
  const AccessToken = await getCookie(ACCESS_TOKEN, URL);

  console.log("ACCESS_TOKEN:", AccessToken);
  if (AccessToken) return AccessToken;

  //refresh token 유효기간 확인
  const RefreshToken = await getCookie(REFRESH_TOKEN, URL);
  console.log("RefreshToken:", RefreshToken);
  if (RefreshToken) {
    const reissuanceAccessToken = await onReissuanceAccessToken();
    const AccessToken = await setCookie(
      ACCESS_TOKEN,
      DOMAIN,
      URL,
      reissuanceAccessToken,
      false
    );

    return AccessToken;
  }

  return null;
};

interface Config {
  method?: string;
  headers?: object;
  data?: object;
}

// header에 토큰 들어가는 request
export const authFetch = async (url: string, configs: Config) => {
  const Token = await cookieCheck();
  if (!Token) return alert("토큰이 없습니다");
  try {
    const res = await axios(`${BaseUrl}${url}`, {
      ...configs,
      headers: {
        ...configs.headers,
        "Access-Token": Token as string,
      },
    });
    console.log("authfetch:", res);
    if (!(res.status === 200)) throw new Error(`status error ${res.status}`);

    const { data } = res;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// 토큰 없는 request
export const fetch = async (url: string, configs: Config) => {
  try {
    const res = await axios(`${BaseUrl}${url}`, {
      ...configs,
      headers: {
        ...configs.headers,
      },
    });

    console.log("fetch:", res);
    if (!(res.status === 200)) throw new Error(`status error ${res.status}`);
    const { data } = res;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 로그인 api
export const userLogin = async ({ email, password }: SignUpOrIn) => {
  try {
    const res: LogInResponse = await fetch(`${USER}${LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });

    console.log("userLogin:", res);

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
