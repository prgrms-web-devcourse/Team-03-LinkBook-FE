import React, { useLayoutEffect, useState } from "react";
import { cookieCheck } from "../utils/api";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const Root = () => {
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    const cookieCheckFunc = async () => {
      const res = await cookieCheck();
      if (res) return setIsLogin(true);
    };

    cookieCheckFunc();
  }, []);

  return <>{isLogin ? <MainPage /> : <LoginPage isLogin={setIsLogin} />}</>;
};

export default Root;
