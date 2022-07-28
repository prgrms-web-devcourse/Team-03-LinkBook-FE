import Link from 'next/link';
import { useEffect, useState } from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import * as S from './NavigationBar.style';

interface Props {
  isLogin: boolean;
}

const defaultProps = {
  isLogin: false,
};

const NavigationBar = ({ isLogin }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogin);

  useEffect(() => {
    setIsLoggedIn(isLogin);
  }, [isLogin]);

  return (
    <S.Container>
      <S.ItemContainer>
        <Link href="/" passHref>
          <S.Logo href="/">
            <Text version="logo">링북</Text>
            <Icon name="bookmark" size={35} />
          </S.Logo>
        </Link>
        <S.Nav>
          <Link href="/folderList" passHref>
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
              <Link href="/myPage" passHref>
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
              <S.UserButton>회원가입</S.UserButton>
              <Button type="button" version="navBar">
                로그인
              </Button>
            </S.UserContainer>
          </>
        )}
      </S.ItemContainer>
    </S.Container>
  );
};

NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
