import React, { useLayoutEffect, useState } from "react";
import { ACCESS_TOKEN } from "../utils/constants";
import { getCookie } from "../utils/cookies";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const Root = () => {
  const [isLogin, setIsLogin] = useState(false);
  useLayoutEffect(() => {
    getCookie(ACCESS_TOKEN, "https://google.com").then((res) => {
      if (res) return setIsLogin(true);
    });
  }, []);

  return <>{isLogin ? <MainPage /> : <LoginPage isLogin={setIsLogin} />}</>;
};

export default Root;
