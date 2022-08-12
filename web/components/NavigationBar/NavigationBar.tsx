import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Avatar, Button, Icon, Text, Modal, SearchBar } from '../index';
import { useRecoilState } from 'recoil';
import { loginStatus } from '../../recoil/authentication';
import nookies from 'nookies';
import * as S from './NavigationBar.style';
import { removeCookie } from '../../util/cookies';
import { NextPageContext } from 'next';
import { PAGE_URL } from '../../constants/url.constants';
import { TEMP_USER_ID } from '../../constants/alert.constants';
import { useRouter } from 'next/router';

export const getServerSideProps = (ctx: NextPageContext) => {
  const { token } = nookies.get(ctx);
  console.log(token);
  return {
    props: {
      token,
    },
  };
};

interface Props {
  token: string;
}

const NavigationBar = ({ token }: Props) => {
  const [loginState, setLoginState] = useRecoilState(loginStatus);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleNewFolder = () => {
    router.push(`/foldercreate`);
  };

  const handleLogout = () => {
    removeCookie('ACCESS_TOKEN');
    removeCookie('REFRESH_TOKEN');
    setLoginState(false);
  };

  const handleSignUp = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleSwitchModal = () => {
    handleLogin();
    handleSignUp();
  };

  const handleClickSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <>
      <Modal
        version="login"
        show={showLoginModal}
        closeFunc={handleLogin}
        switchFunc={handleSwitchModal}
      />
      <Modal version="signUp" show={showSignUpModal} closeFunc={handleSignUp} />
      <S.Container>
        <S.ItemContainer>
          <Link href={PAGE_URL.MAIN} passHref>
            <S.Logo href={PAGE_URL.MAIN}>
              <Text version="logo">링북</Text>
              <Icon name="bookmark" size={35} />
            </S.Logo>
          </Link>
          <S.Nav>
            <Link
              href={{
                pathname: '/folderlist/explore/all',
                query: {
                  mainTag: 'all',
                  subTag: 'all',
                },
              }}
              as={'/folderlist/explore/all'}
              passHref
            >
              <S.NavItem>북마크리스트</S.NavItem>
            </Link>
            <Link href={PAGE_URL.INFO} passHref>
              <S.NavItem>이용방법</S.NavItem>
            </Link>
          </S.Nav>
          {isLoggedIn ? (
            <>
              <S.IconWrapper onClick={handleClickSearch}>
                <Icon name="search_ic" size={20} />
              </S.IconWrapper>
              <Avatar size={35} />
              <S.Line>|</S.Line>
              <S.UserContainer>
                <Link href={`${PAGE_URL.USER}/${TEMP_USER_ID}`} passHref>
                  <S.NavItem>마이페이지</S.NavItem>
                </Link>
                <Button
                  type="button"
                  version="navBar"
                  onClick={handleNewFolder}
                >
                  새 폴더 작성
                </Button>
                <Button type="button" version="navBar" onClick={handleLogout}>
                  로그아웃
                </Button>
              </S.UserContainer>
            </>
          ) : (
            <>
              <S.IconWrapper onClick={handleClickSearch}>
                <Icon name="search_ic" size={20} />
              </S.IconWrapper>
              <S.Line>|</S.Line>
              <S.UserContainer>
                <S.UserButton onClick={handleSignUp}>회원가입</S.UserButton>
                <Button type="button" version="navBar" onClick={handleLogin}>
                  로그인
                </Button>
              </S.UserContainer>
            </>
          )}
        </S.ItemContainer>
        {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}
      </S.Container>
    </>
  );
};

export default NavigationBar;
