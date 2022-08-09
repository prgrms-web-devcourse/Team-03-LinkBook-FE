import React, { useState } from "react";
import Login from "./Login";
import MainPage from "./MainPage";

const RootStack = () => {
  const [isLoggined, setIsLoggined] = useState(false);
  let page;
  if (isLoggined) {
    page = <MainPage />;
  } else {
    page = <Login />;
  }

  return (
    <>
      {page}
      <button onClick={() => setIsLoggined((prev) => !prev)}>로그인</button>
    </>
  );
};

export default RootStack;
