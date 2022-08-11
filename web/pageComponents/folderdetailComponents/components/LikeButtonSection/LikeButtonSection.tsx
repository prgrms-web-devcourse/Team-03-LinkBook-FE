import { RoundButton } from '../index';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';
import { useEffect, useState } from 'react';
import { TEMP_USER_ID } from '../../../../constants/alert.constants';

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

  useEffect(() => {
    setIsLikedValue(isLiked);
    setLikesNum(likes);
  }, [isLiked, likes]);

  const handleClickAddLike = async () => {
    try {
      await createLike(folderId, TEMP_USER_ID, token);
      setIsLikedValue(true);
      setLikesNum(likesNum + 1);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      await deleteLike(folderId, token);
      setIsLikedValue(false);
      setLikesNum(likesNum - 1);
    } catch (error) {
      alert('문제가 발생했습니다.');
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
