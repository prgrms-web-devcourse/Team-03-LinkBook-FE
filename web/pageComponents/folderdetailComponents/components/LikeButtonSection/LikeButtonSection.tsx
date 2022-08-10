import { RoundButton } from '../index';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';
import { useState } from 'react';

interface Props {
  id: number;
  likes: number;
  token?: string;
}

const LikeButtonSection = ({ id, likes, token }: Props) => {
  // initialLiked State 설정 필요
  const [isLiked, setIsLiked] = useState(false);

  const handleClickAddLike = async () => {
    try {
      const res = await createLike(id, 4, token);
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
    />
  );
};

export default LikeButtonSection;
