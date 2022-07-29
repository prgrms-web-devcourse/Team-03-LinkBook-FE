import { MouseEventHandler } from 'react';
import * as S from '../FirstLogin.style';
import { Button, Input, Icon } from '../../../index';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page02 = ({ handleNextPage, handlePreviousPage }: Props) => {
  return (
    <S.Container>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        Haeyum님 반가워요! 👋🏻
        <br />
        <S.MainText>한 줄로 자신을 소개</S.MainText>해 주세요!
      </S.Title>
      <Input placeholder="한 줄 소개" />
      <S.ButtonContainer>
        <Button type="button" onClick={handleNextPage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Page02;
