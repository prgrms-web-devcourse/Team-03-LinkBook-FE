import * as S from './NavigationBar.style';
import Link from 'next/link';
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import { Icon, Text, SearchBar } from '../index';
import { useRecoilValue } from 'recoil';
import { loginStatus } from '../../recoil/authentication';
import { NextPageContext } from 'next';
import { PAGE_URL } from '../../constants/url.constants';
import HandleModalSection from './HandleModalSection';
import LoginSection from './LoginSection';
import LogoutSection from './LogoutSection';

export const getServerSideProps = (ctx: NextPageContext) => {
  const { token } = nookies.get(ctx);
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
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const loginState = useRecoilValue(loginStatus);

  const handleClickSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <>
      <HandleModalSection />
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
                pathname: `${PAGE_URL.LIST}`,
                query: {
                  mainTag: '전체 카테고리',
                  subTag: '전체 카테고리',
                },
              }}
              as={`${PAGE_URL.LIST}/explore/전체 카테고리`}
              passHref
            >
              <S.NavItem>북마크리스트</S.NavItem>
            </Link>
            <Link href={PAGE_URL.INFO} passHref>
              <S.NavItem>이용방법</S.NavItem>
            </Link>
          </S.Nav>
          <S.IconWrapper onClick={handleClickSearch}>
            <Icon name="search_ic" size={18} />
          </S.IconWrapper>
          {isLoggedIn ? <LoginSection /> : <LogoutSection />}
        </S.ItemContainer>
        {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}
      </S.Container>
    </>
  );
};

export default NavigationBar;
