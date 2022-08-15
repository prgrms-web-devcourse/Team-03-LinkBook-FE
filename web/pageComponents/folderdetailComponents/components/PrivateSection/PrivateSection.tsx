import * as S from './PrivateSection.style';
import { useRouter } from 'next/router';
import { Icon } from '../../../../components';
import { deleteFolder } from '../../../../apis/FolderAPI';
import { PAGE_URL } from '../../../../constants/url.constants';

interface Props {
  id: number;
  isPrivate: boolean;
  isPinned: boolean;
  token?: string;
}

const PrivateSection = ({ id, isPrivate, isPinned, token }: Props) => {
  const router = useRouter();

  const handleClickMoveUpdate = () => {
    router.push(`${PAGE_URL.UPDATE}/${id}`);
  };

  const handleClickDeletePost = async () => {
    const confirmDelete = confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await deleteFolder(id, token);
      await router.push(PAGE_URL.MAIN);
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다.');
    }
  };

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.Tag>{isPrivate ? 'Private' : 'Public'}</S.Tag>
        {isPinned && <Icon name="ico_pin" size={28} />}
      </S.ButtonsContainer>
      <S.ButtonsContainer>
        <S.UpdateButton onClick={handleClickMoveUpdate}>수정</S.UpdateButton>|
        <S.UpdateButton onClick={handleClickDeletePost}>삭제</S.UpdateButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default PrivateSection;
