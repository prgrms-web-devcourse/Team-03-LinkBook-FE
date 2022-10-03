import * as S from '../../Modal.style';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Button, ImageUpload, Icon, Toast } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { getUserInfo, updateUserInfo } from '../../../../apis/UserAPI';
import { getCookie } from '../../../../util/cookies';
import { useSetRecoilState } from 'recoil';
import { userInfo as userInfoRecoil } from '../../../../recoil/user';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page04 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const [imageSrc, setImageSrc] = useState('');
  const { userInfo, getUpdatedUserInfo, removeUserInfo } = useUserInfo();
  const setUserInfoState = useSetRecoilState(userInfoRecoil);
  const token = getCookie('ACCESS_TOKEN');

  const handleClickStoreImage: MouseEventHandler = async (e) => {
    const profileImage =
      imageSrc.length === 0
        ? 'https://linkbook-s3-1.s3-ap-northeast-2.amazonaws.com/static/userImage.png.png'
        : imageSrc;
    const updatedUserInfo = getUpdatedUserInfo(profileImage);

    try {
      await updateUserInfo(updatedUserInfo, token);
      await removeUserInfo();

      const newUserInfo = await getUserInfo(token);
      setUserInfoState(newUserInfo);
    } catch (error) {
      console.log(error);
      Toast.show('문제가 발생했습니다.');
      return;
    }

    handleNextPage(e);
  };

  useEffect(() => {
    setImageSrc(userInfo.image);
  }, [userInfo]);

  return (
    <S.InnerContainer>
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
      </S.IconContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickStoreImage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Page04;
