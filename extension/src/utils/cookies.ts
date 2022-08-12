export const setCookie = async (
  key: string,
  domain: string,
  url: string,
  value: string,
  isRefresh: boolean
) => {
  const res = await chrome.cookies.set({
    name: key,
    domain,
    url,
    expirationDate: isRefresh
      ? new Date().getTime() / 1000 + 1209600
      : new Date().getTime() / 1000 + 18000,
    value,
  });

  console.log(res?.value);
  return res?.value;
};

export const getCookie = async (key: string, url: string) => {
  const res = await chrome.cookies.get({
    name: key,
    url,
  });
  console.log(res?.value);
  return res?.value;
};
