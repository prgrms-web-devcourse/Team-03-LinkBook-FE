import * as S from '../NavigationBar.style';
import { Button } from '../../index';
import { useSetRecoilState } from 'recoil';
import { showModalStatus } from '../../../recoil/showModal';
import {
  showLoginModal,
  showSignUpModal,
} from '../../../constants/modal.constants';

const LogoutSection = () => {
  const setShowModalStatus = useSetRecoilState(showModalStatus);

  return (
    <>
      <S.Line>|</S.Line>
      <S.UserContainer>
        <S.UserButton onClick={() => setShowModalStatus(showSignUpModal)}>
          회원가입
        </S.UserButton>
        <Button
          type="button"
          version="navBar"
          onClick={() => setShowModalStatus(showLoginModal)}
        >
          로그인
        </Button>
      </S.UserContainer>
    </>
  );
};

export default LogoutSection;
