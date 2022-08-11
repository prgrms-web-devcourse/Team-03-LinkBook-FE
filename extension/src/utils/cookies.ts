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

export const getCookie = (key: string, url: string) => {
  return new Promise((resolve, reject) => {
    chrome.cookies.get(
      {
        name: key,
        url,
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
