import { MouseEventHandler } from 'react';
import { Button, Input, Icon } from '../../../index';
import * as S from '../../Modal.style';

interface Props {
  handlePage: MouseEventHandler;
  onSignUp: MouseEventHandler;
}

const Page02 = ({ handlePage, onSignUp }: Props) => {
  return (
    <S.InnerContainer>
      <S.PreviousButton onClick={handlePage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        사용할 <S.MainText>비밀번호</S.MainText>를 입력해 주세요.
        <S.Description>
          10자리 사이의 영문+특수문자 조합으로 입력해 주세요!
        </S.Description>
      </S.Title>
      <S.InputContainer>
        <Input placeholder="비밀번호" type="password" />
        <Input
          placeholder="비밀번호를 한번 더 입력해 주세요."
          type="password"
        />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={onSignUp}>
          회원가입 &gt;
        </Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Page02;
