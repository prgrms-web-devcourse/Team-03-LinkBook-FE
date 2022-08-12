import * as S from '../NavigationBar.style';
import Link from 'next/link';
import { Avatar, Button } from '../../index';
import { PAGE_URL } from '../../../constants/url.constants';
import { TEMP_USER_ID } from '../../../constants/alert.constants';
import { removeCookie } from '../../../util/cookies';
import { loginStatus } from '../../../recoil/authentication';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { userInfo } from '../../../recoil/user';

const LoginSection = () => {
  const setLoginState = useSetRecoilState(loginStatus);
  const setUserInfo = useSetRecoilState(userInfo);
  const router = useRouter();

  const handleCreateFolder = () => {
    router.push(`${PAGE_URL.CREATE}`);
  };

  const handleLogout = () => {
    removeCookie('ACCESS_TOKEN');
    removeCookie('REFRESH_TOKEN');
    setLoginState(false);
    setUserInfo({});
  };

  return (
    <>
      <S.Line>|</S.Line>
      <Avatar size={35} />
      <S.Line>|</S.Line>
      <S.UserContainer>
        <Link href={`${PAGE_URL.USER}/${TEMP_USER_ID}`} passHref>
          <S.NavItem>마이페이지</S.NavItem>
        </Link>
        <Button type="button" version="navBar" onClick={handleCreateFolder}>
          새 폴더 작성
        </Button>
        <Button type="button" version="navBar" onClick={handleLogout}>
          로그아웃
        </Button>
      </S.UserContainer>
    </>
  );
};

export default LoginSection;
