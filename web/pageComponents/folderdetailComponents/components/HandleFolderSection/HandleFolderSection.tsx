import RoundButton from '../RoundButton';
import * as S from './HandleFolderSection.style';
import { createLike, deleteLike } from '../../../../apis/LikeAPI';

interface Props {
  id: number;
  likes: number;
  token?: string;
}

const HandleFolderSection = ({ id, likes, token }: Props) => {
  const handleClickAddLike = async () => {
    try {
      const res = await createLike(id, 4, token);
      console.log(res);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickCancelLike = async () => {
    try {
      const res = await deleteLike(id, token);
      console.log(res);
    } catch (error) {
      alert('문제가 발생했습니다.');
      console.log(error);
    }
  };

  const handleClickScrap = async () => {
    try {
    } catch (error) {}
  };

  return (
    <S.Container>
      <RoundButton iconName="likes_clicked_white" description={likes} />
      <RoundButton
        iconName="copy_white"
        description="스크랩"
        onClick={handleClickScrap}
      />
    </S.Container>
  );
};

export default HandleFolderSection;
