import { useRouter } from 'next/router';
import * as S from './PrivateSection.style';
import { Icon } from '../../../../components';

interface Props {
  id: number;
  isPrivate: boolean;
  isPinned: boolean;
  token?: string;
}

const PrivateSection = ({ id, isPrivate, isPinned, token }: Props) => {
  const router = useRouter();

  const handleClickMoveUpdate = () => {
    router.push(`/folderupdate/${id}`);
  };

  const handleClickDeletePost = () => {
    console.log(token);
    console.log('delete');
  };

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.Tag>{isPrivate ? 'Private' : 'Public'}</S.Tag>
        {isPinned && (
          <S.Tag>
            <Icon name="ico_pin" size={20} />
          </S.Tag>
        )}
      </S.ButtonsContainer>
      <S.ButtonsContainer>
        <S.UpdateButton onClick={handleClickMoveUpdate}>수정</S.UpdateButton>|
        <S.UpdateButton onClick={handleClickDeletePost}>삭제</S.UpdateButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default PrivateSection;
