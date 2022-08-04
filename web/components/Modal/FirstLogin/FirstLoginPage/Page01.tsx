import { MouseEventHandler } from 'react';
import * as S from '../../Modal.style';
import { Input, Button } from '../../../index';

interface Props {
  handleNextPage: MouseEventHandler;
}

const Page01 = ({ handleNextPage }: Props) => {
  return (
    <>
      <S.Title>
        <br />
        <S.MainText>Linkbook</S.MainText>에 오신 것을 환영해요! 🎉
        <br />
        사용할 <S.MainText>닉네임</S.MainText>을 입력해 주세요.
      </S.Title>
      <Input placeholder="닉네임" type="text" />
      <S.ButtonContainer>
        <Button type="button" onClick={handleNextPage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page01;
