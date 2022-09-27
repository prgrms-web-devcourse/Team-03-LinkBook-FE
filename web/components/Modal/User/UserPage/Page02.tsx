import * as S from '../../Modal.style';
import { useEffect, useState } from 'react';
import { Button, TagSelector, Toast } from '../../../index';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { showModalStatus } from '../../../../recoil/showModal';
import { User } from '../../../../types';
import { getUserInfo, updateUserInfo } from '../../../../apis/UserAPI';

interface Props {
  token: string;
  userData: User;
}

const Page02 = ({ token, userData }: Props) => {
  const setUserInfoState = useSetRecoilState(userInfo);
  const closeModal = useResetRecoilState(showModalStatus);
  const { updatedUserInfo, removeUserInfo } = useUserInfo();
  const [selectedTag, setSelectedTag] = useState([]);

  const handleUpdate = async () => {
    const userData = {
      ...updatedUserInfo,
      interests: selectedTag,
    };

    try {
      await updateUserInfo(userData, token);
      const newUserInfo = await getUserInfo(token);
      setUserInfoState(newUserInfo);

      closeModal();
    } catch (error) {
      console.log(error);
      Toast.show('문제가 발생했습니다.');
    }
  };

  const handleCancelUpdate = () => {
    removeUserInfo();
    closeModal();
  };

  useEffect(() => {
    if (!userData) return;

    setSelectedTag(userData.interests);
  }, [userData]);

  return (
    <>
      {userData && (
        <S.InnerContainer>
          <S.Title>
            수정하고 싶은
            <br />
            <S.MainText>관심사 태그</S.MainText>를 선택해주세요.
          </S.Title>
          <TagSelector
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          <S.ButtonContainer>
            <Button type="button" onClick={handleCancelUpdate}>
              수정 취소
            </Button>
            <Button type="button" onClick={handleUpdate}>
              수정 완료
            </Button>
          </S.ButtonContainer>
        </S.InnerContainer>
      )}
    </>
  );
};

export default Page02;
