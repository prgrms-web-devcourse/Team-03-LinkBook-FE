import Link from 'next/link';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import * as S from './NavigationBar.style';

const NavigationBar = () => {
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
        <S.Line>|</S.Line>
        <S.User>
          <S.UserSignUp>회원가입</S.UserSignUp>
          <Button type="button" version="navBar">
            로그인
          </Button>
        </S.User>
      </S.ItemContainer>
    </S.Container>
  );
};

export default NavigationBar;
