import { CURRENT_TIME } from "./constants";

export const setCookie = async (
  key: string,
  url: string,
  value: string,
  isToken: boolean
) => {
  const res = await chrome.cookies.set({
    name: key,
    url,
    expirationDate: isToken ? CURRENT_TIME + 1209600 : CURRENT_TIME + 18000,
    value,
  });

  return res?.value;
};

export const getCookie = async (key: string, url: string) => {
  const res = await chrome.cookies.get({
    name: key,
    url,
  });

  return res?.value;
};

export const checkExpireTime = () => {};
