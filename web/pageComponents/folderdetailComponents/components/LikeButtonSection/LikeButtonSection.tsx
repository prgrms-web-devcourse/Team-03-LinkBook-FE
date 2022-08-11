import { RoundButton } from '../index';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';
import { useState } from 'react';
import { TEMP_USER_ID } from '../../../../constants/alert.constants';

interface Props {
  folderId: number;
  likes: number;
  token: string;
  likeId?: number | null;
}

const LikeButtonSection = ({
  folderId,
  likes,
  token,
  likeId = null,
}: Props) => {
  const [isLiked, setIsLiked] = useState(likeId ? true : false);
  const [likeIdValue, setLikeIdValue] = useState(likeId);
  const [likesNum, setLikesNum] = useState(likes);

  const handleClickAddLike = async () => {
    try {
      const res: any = await createLike(folderId, TEMP_USER_ID, token);
      console.log(res);
      const { id } = res;
      setIsLiked(true);
      setLikeIdValue(id);
      setLikesNum(likesNum + 1);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      const res = await deleteLike(likeIdValue, token);
      console.log(res);
      setIsLiked(false);
      setLikeIdValue(null);
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
      onClick={isLiked ? handleClickCancelLike : handleClickAddLike}
      isClicked={isLiked}
    />
  );
};

export default LikeButtonSection;
