import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Avatar, Button, Icon, Text, Modal } from '../index';
import * as S from './NavigationBar.style';

interface Props {
  isLogin: boolean;
}

const defaultProps = {
  isLogin: false,
};

const NavigationBar = ({ isLogin }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogin);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleSignUp = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleSwitchModal = () => {
    handleLogin();
    handleSignUp();
  };

  useEffect(() => {
    setIsLoggedIn(isLogin);
  }, [isLogin]);

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
          <Link href="/" passHref>
            <S.Logo href="/">
              <Text version="logo">링북</Text>
              <Icon name="bookmark" size={35} />
            </S.Logo>
          </Link>
          <S.Nav>
            <Link href="/folderlist" passHref>
              <S.NavItem>북마크리스트</S.NavItem>
            </Link>
            <Link href="/information" passHref>
              <S.NavItem>이용방법</S.NavItem>
            </Link>
          </S.Nav>
          {isLoggedIn ? (
            <>
              <Avatar size={35} />
              <S.Line>|</S.Line>
              <S.UserContainer>
                <Link href="/user/1" passHref>
                  <S.NavItem>마이페이지</S.NavItem>
                </Link>
                <Button type="button" version="navBar">
                  새 폴더 작성
                </Button>
              </S.UserContainer>
            </>
          ) : (
            <>
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
      </S.Container>
    </>
  );
};

NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
