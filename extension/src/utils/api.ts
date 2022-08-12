import axios from "axios";
import {
  ACCESS_TOKEN,
  BOOKMARKS,
  DOMAIN,
  FOLDER_DEFAULT_IMG,
  REFRESH_TOKEN,
  URL,
} from "./constants";
import { getCookie, setCookie } from "./cookies";
import {
  LogInResponse,
  SignUpOrIn,
  AllFolderList,
  CreateFolderRes,
  User,
} from "./types";
import { LOGIN, USER, ME, FOLDERS, BaseUrl } from "./constants";

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

    return res.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

// 쿠키 확인함수
export const cookieCheck = async () => {
  //access token 유효기간 확인
  const AccessToken = await getCookie(ACCESS_TOKEN, URL);
  if (AccessToken) return AccessToken;

  //refresh token 유효기간 확인
  const RefreshToken = await getCookie(REFRESH_TOKEN, URL);

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
        "Access-Token": Token as string,
      },
    });

    if (!(res.status === 200)) throw new Error(`status error ${res.status}`);

    const { data } = res;

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

    if (!(res.status === 200)) throw new Error(`status error ${res.status}`);
    const { data } = res;

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
      data: {
        email,
        password,
      },
    });

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

interface GetUserRes {
  user: User;
}

//내 정보 조회
export const getUserInfo = async () => {
  const res: GetUserRes = await authFetch(`${USER}${ME}`, {
    method: "GET",
  });

  return res.user;
};

//특정 사용자의 폴더리스트 조회
export const getFolderList = async (id: number) => {
  const res: AllFolderList = await authFetch(`${FOLDERS}${USER}/${id}`, {
    method: "GET",
  });

  const {
    folders: { content },
  } = res;

  return content;
};

//폴더 생성
interface CreateFolderReq {
  title: string;
  isPrivate: boolean;
}
export const createFolder = async ({ title, isPrivate }: CreateFolderReq) => {
  const res: CreateFolderRes = await authFetch(`${FOLDERS}`, {
    method: "POST",
    data: {
      title,
      image: FOLDER_DEFAULT_IMG,
      content: "테스트용",
      isPinned: false,
      isPrivate,
      tags: [],
      bookmarks: [],
    },
  });

  return res;
};

interface CreateBookmarkReq {
  folderId: number;
  url: string;
  title: string;
}

export const createBookmark = async ({
  folderId,
  url,
  title,
}: CreateBookmarkReq) => {
  await authFetch(`${BOOKMARKS}`, {
    method: "POST",
    data: {
      folderId,
      url,
      title,
    },
  });
};
