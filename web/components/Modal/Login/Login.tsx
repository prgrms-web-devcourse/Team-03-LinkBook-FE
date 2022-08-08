import { MouseEventHandler } from 'react';
import { Button, Input, Icon } from '../../index';
import { useSetRecoilState } from 'recoil';

import * as S from '../Modal.style';
import { loginStatus } from '../../../recoil/authentication';
import { setCookies } from '../../../util/cookies';

interface Props {
  switchFunc?: MouseEventHandler;
}

const Login = ({ switchFunc }: Props) => {
  const setLoginStatus = useSetRecoilState(loginStatus);
  const handleLogin = () => {
    setCookies('token', 'tempToken', '/');
    setLoginStatus(true);
  };

  return (
    <S.InnerContainer>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 오신것을 환영합니다! 🎉
      </S.Title>
      <S.InputContainer>
        <Input placeholder="아이디(이메일)" type="text"></Input>
        <Input placeholder="비밀번호" type="password"></Input>
        <S.LoggedButton>
          <Icon name="btn_notChecked" size={25} />
          <S.LoggedText>로그인 상태 유지</S.LoggedText>
        </S.LoggedButton>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleLogin}>
          로그인
        </Button>
      </S.ButtonContainer>
      {/* <S.ButtonContainer>
        <Button type="button">Kakao 로그인</Button>
        <Button type="button">Naver 로그인</Button>
      </S.ButtonContainer> */}
      <S.SignUpContainer>
        <S.SignUpText> 아직 Linkbook의 회원이 아니신가요?</S.SignUpText>
        <S.ButtonContainer>
          <Button type="button" version="mainLight" onClick={switchFunc}>
            회원가입
          </Button>
        </S.ButtonContainer>
      </S.SignUpContainer>
    </S.InnerContainer>
  );
};

export default Login;
