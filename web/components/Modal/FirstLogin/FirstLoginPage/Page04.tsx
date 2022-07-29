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
        Haeyum님만의
        <br />
        <S.MainText>프로필 사진</S.MainText>을 설정해 주세요!
        <S.Description>
          <S.MainText>'마이페이지'</S.MainText>에서 얼마든지 변경할 수 있어요!
        </S.Description>
      </S.Title>
      <S.IconContainer>{/* 사용자의 프로필 사진 */}</S.IconContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleNextPage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Page02;
