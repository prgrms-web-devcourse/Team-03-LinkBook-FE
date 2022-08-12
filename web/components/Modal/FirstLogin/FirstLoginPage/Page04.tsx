import * as S from '../../Modal.style';
import { MouseEventHandler, useState } from 'react';
import { Button, ImageUpload, Icon } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { updateUserInfo } from '../../../../apis/UserAPI';
import { getCookie } from '../../../../util/cookies';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page04 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const [imageSrc, setImageSrc] = useState('');
  const [errorText, setErrorText] = useState('');
  const { userInfo, setUserImage, removeUserInfo } = useUserInfo();
  const token = getCookie('ACCESS_TOKEN');

  const handleClickStoreImage: MouseEventHandler = async (e) => {
    const setImageResult = setUserImage(imageSrc);

    if (typeof setImageResult === 'string') {
      setErrorText(setImageResult);
      return;
    }

    try {
      await updateUserInfo(userInfo, token);
      await removeUserInfo();
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다.');
    }

    handleNextPage(e);
  };

  return (
    <>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        {userInfo.name}님만의
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
