import { RoundButton } from '../index';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { showModalStatus } from '../../../../recoil/showModal';
import { showLoginModal } from '../../../../constants/modal.constants';
import { Toast } from '../../../../components';

interface Props {
  folderId: number;
  likes: number;
  token: string;
  isLiked: boolean;
  disabled: boolean;
}

const LikeButtonSection = ({
  folderId,
  likes,
  token,
  isLiked,
  disabled,
}: Props) => {
  const [isLikedValue, setIsLikedValue] = useState(isLiked);
  const [likesNum, setLikesNum] = useState(likes);
  const setShowModalStatus = useSetRecoilState(showModalStatus);
  const { user }: any = useRecoilValue(userInfo);

  useEffect(() => {
    setIsLikedValue(isLiked);
    setLikesNum(likes);
  }, [isLiked, likes]);

  const handleClickAddLike = async () => {
    if (!user) {
      Toast.show('로그인 후 가능합니다.');
      setShowModalStatus(showLoginModal);
      return;
    }

    try {
      await createLike(folderId, user.id, token);
      setIsLikedValue(true);
      setLikesNum(likesNum + 1);
    } catch (error) {
      Toast.show('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      await deleteLike(folderId, token);
      setIsLikedValue(false);
      setLikesNum(likesNum - 1);
    } catch (error) {
      Toast.show('문제가 발생했습니다.');
      console.log(error);
    }
  };

  return (
    <RoundButton
      iconName="likes_clicked_white"
      description={likesNum}
      onClick={isLikedValue ? handleClickCancelLike : handleClickAddLike}
      isClicked={isLikedValue}
      disabled={disabled}
    />
  );
};

export default LikeButtonSection;
