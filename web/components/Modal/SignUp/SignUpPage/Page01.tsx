import * as S from '../../Modal.style';
import { Button, Input } from '../../../index';
import { MouseEventHandler } from 'react';

interface Props {
  handlePage: MouseEventHandler;
}

const Page01 = ({ handlePage }: Props) => {
  return (
    <>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 처음 오셨군요! 🎉
        <br />
        사용할 <S.MainText>아이디</S.MainText>를 입력해 주세요.
        <S.Description>이메일 형식으로 입력해 주세요!</S.Description>
      </S.Title>
      <S.InputContainer>
        <Input placeholder="아이디(이메일)" type="text">
          <Button type="button" version="modal">
            인증번호 발송
          </Button>
        </Input>
        <Input
          placeholder="이메일로 발송된 6자리 인증 코드를 입력해주세요."
          type="number"
        >
          <Button type="button" version="modal">
            인증
          </Button>
        </Input>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handlePage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page01;
