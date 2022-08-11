export const setCookie = (
  key: string,
  domain: string,
  url: string,
  value: string
) => {
  return new Promise((resolve, reject) => {
    chrome.cookies.set(
      {
        name: key,
        domain,
        url,
        expirationDate: new Date().getTime() / 1000 + 3600,
        value: value,
      },
      (cookie) => {
        if (cookie) {
          console.log(cookie);
          resolve(cookie.value);
        } else {
          console.log("Can't get cookie");
          reject(0);
        }
      }
    );
  });
};

export const getCookie = async (key: string, url: string) => {
  const res = await chrome.cookies.get({
    name: key,
    url,
  });
  console.log(res?.value);
  return res?.value;
};
