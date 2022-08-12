import { MouseEventHandler, useState } from 'react';
import * as S from '../../Modal.style';
import { Button, ImageUpload, Icon } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page04 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const [imageSrc, setImageSrc] = useState('');
  const [errorText, setErrorText] = useState('');
  const { setUserImage } = useUserInfo();

  const handleClickStoreImage: MouseEventHandler = (e) => {
    const res = setUserImage(imageSrc);

    if (typeof res === 'string') {
      setErrorText(res);
      return;
    }

    handleNextPage(e);
  };

  return (
    <>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        Haeyum님만의
        <br />
        <S.MainText>프로필 사진</S.MainText>을 설정해 주세요!
        <S.Description>
          <S.MainText>'마이페이지'</S.MainText>에서 얼마든지 변경할 수 있어요!
        </S.Description>
      </S.Title>
      <S.IconContainer>
        <ImageUpload version="modal" setImageSrc={setImageSrc} />
        <S.ErrorText>{errorText}</S.ErrorText>
      </S.IconContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickStoreImage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page04;
