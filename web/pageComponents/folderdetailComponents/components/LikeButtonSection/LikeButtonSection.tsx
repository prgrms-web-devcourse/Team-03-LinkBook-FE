import { RoundButton } from '../index';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';
import { useState } from 'react';
import { TEMP_USER_ID } from '../../../../constants/alert.constants';

interface Props {
  id: number;
  likes: number;
  initialIsLiked: boolean;
  token?: string;
}

const LikeButtonSection = ({ id, likes, initialIsLiked, token }: Props) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleClickAddLike = async () => {
    try {
      const res = await createLike(id, TEMP_USER_ID, token);
      console.log(res);
      setIsLiked(true);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      const res = await deleteLike(id, token);
      console.log(res);
      setIsLiked(false);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  return (
    <RoundButton
      iconName="likes_clicked_white"
      description={likes}
      onClick={isLiked ? handleClickCancelLike : handleClickAddLike}
      isClicked={isLiked}
    />
  );
};

export default LikeButtonSection;
