import React, { useState } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const RootStack = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <MainPage /> : <LoginPage />}
      {!isLogin && <button onClick={() => setIsLogin(true)}>login</button>}
    </>
  );
};

export default RootStack;
