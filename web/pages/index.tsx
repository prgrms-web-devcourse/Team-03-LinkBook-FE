import type { NextPageContext } from 'next';
import * as S from '../styles/pageStyles/index.style';
import {
  MainCategory,
  MyFoldersAreaLogIn,
  MyFoldersAreaLogOut,
  UseInfo,
} from '../pageComponents/mainPageComponents/components';
import { useRecoilValue } from 'recoil';
import { loginStatus } from '../recoil/authentication';
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import { Seo } from '../components';

export const getServerSideProps = (ctx: NextPageContext) => {
  const { token } = nookies.get(ctx);
  if (token) {
    return { props: { token } };
  }
  return { props: {} };
};

interface Props {
  token: string;
}

const MainPage = ({ token }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const loginState = useRecoilValue(loginStatus);

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <S.Container>
      <Seo title="링북" />
      {isLoggedIn ? <MyFoldersAreaLogIn /> : <MyFoldersAreaLogOut />}
      <MainCategory />
      <UseInfo />
    </S.Container>
  );
};

export default MainPage;
