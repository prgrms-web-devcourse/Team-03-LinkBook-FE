import * as S from '../NavigationBar.style';
import { Button } from '../../index';
import { useSetRecoilState } from 'recoil';
import { showModalStatus } from '../../../recoil/showModal';

const LogoutSection = () => {
  const setShowModalStatus = useSetRecoilState(showModalStatus);

  const handleLogin = () => {
    setShowModalStatus({
      Login: true,
      SignUp: false,
      FirstLogin: false,
    });
  };

  const handleSignUp = () => {
    setShowModalStatus({
      Login: false,
      SignUp: true,
      FirstLogin: false,
    });
  };

  return (
    <>
      <S.Line>|</S.Line>
      <S.UserContainer>
        <S.UserButton onClick={handleSignUp}>회원가입</S.UserButton>
        <Button type="button" version="navBar" onClick={handleLogin}>
          로그인
        </Button>
      </S.UserContainer>
    </>
  );
};

export default LogoutSection;
