import * as S from '../../Modal.style';
import { MouseEventHandler, useState } from 'react';
import { Button, Icon, TagSelector } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page03 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const { setUserInterests } = useUserInfo();
  const [selectedTag, setSelectedTag] = useState([]);

  const handleClickStoreInterests: MouseEventHandler = (e) => {
    setUserInterests(selectedTag);
    handleNextPage(e);
  };

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
      <S.TagSelectorWrapper>
        <TagSelector
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </S.TagSelectorWrapper>
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickStoreInterests}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page03;
