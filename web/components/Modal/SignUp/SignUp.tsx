import theme from '../../../styles/themes';
import { Button, Input } from '../../index';
import * as S from './SignUp.style';

const SignUp = () => {
  return (
    <S.Container>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 처음 오셨군요! 🎉
        <br />
        사용할 <S.MainText>아이디</S.MainText>를 입력해 주세요.
        <S.Description>이메일 형식으로 입력해 주세요!</S.Description>
      </S.Title>
      <S.InputContainer>
        <Input placeholder="아이디(이메일)">
          <Button type="button" version="modal">
            인증번호 발송
          </Button>
        </Input>
        <Input placeholder="6자리 인증 코드">
          <Button type="button" version="modal">
            인증
          </Button>
        </Input>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button">다음 &gt;</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default SignUp;
