import type { NextPageContext } from 'next';
import * as S from '../styles/pageStyles/index.style';
import { allFolders } from '../shared/DummyData';
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
      {isLoggedIn ? (
        <MyFoldersAreaLogIn data={allFolders} />
      ) : (
        <MyFoldersAreaLogOut />
      )}
      <MainCategory />
      <UseInfo />
    </S.Container>
  );
};

export default MainPage;
