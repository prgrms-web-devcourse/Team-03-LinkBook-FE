import * as S from '../NavigationBar.style';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Avatar, Button } from '../../index';
import { PAGE_URL } from '../../../constants/url.constants';
import { removeCookie } from '../../../util/cookies';
import { loginStatus } from '../../../recoil/authentication';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { userInfo } from '../../../recoil/user';

const LoginSection = () => {
  const setLoginState = useSetRecoilState(loginStatus);
  const userInfoValue = useRecoilValue(userInfo);
  const resetUserInfoValue = useResetRecoilState(userInfo);
  const [avatarSrc, setAvatarSrc] = useState(undefined);
  const router = useRouter();

  const handleCreateFolder = () => {
    router.push(`${PAGE_URL.CREATE}`);
  };

  const handleLogout = () => {
    removeCookie('ACCESS_TOKEN');
    removeCookie('REFRESH_TOKEN');
    setLoginState(false);
    resetUserInfoValue();
  };

  useEffect(() => {
    if (!userInfoValue.user) return;

    const { user } = userInfoValue;
    setAvatarSrc(user.image);
  }, [userInfoValue]);

  return (
    <>
      <S.Line>|</S.Line>
      <Avatar size={35} src={avatarSrc} />
      <S.Line>|</S.Line>
      <S.UserContainer>
        {userInfoValue.user && (
          <Link href={`${PAGE_URL.USER}/${userInfoValue.user.id}`} passHref>
            <S.NavItem>마이페이지</S.NavItem>
          </Link>
        )}
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
