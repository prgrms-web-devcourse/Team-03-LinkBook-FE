import { MouseEventHandler, useState } from 'react';
import * as S from '../../Modal.style';
import { Button, Input, Icon, TagSelector } from '../../../index';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page03 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const [selectedTag, setSelectedTag] = useState([]);
  return (
    <>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        요즘 <S.MainText>관심사</S.MainText>를 선택해주세요.
        <S.Description>
          관심사를 기반으로 한 <S.MainText>북마크 폴더</S.MainText>를
          추천해드려요.
        </S.Description>
      </S.Title>
      <TagSelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <S.ButtonContainer>
        <Button type="button" onClick={handleNextPage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page03;
