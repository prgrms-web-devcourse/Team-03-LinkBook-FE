import { useRouter } from 'next/router';
import {
  CommentSection,
  ContentSection,
} from '../../pageComponents/folderdetailComponents/components';
import * as S from '../../styles/pageStyles/folderDetail.style';

const folderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.Container>
      <ContentSection params={id} />
      <S.Line />
      <CommentSection params={id} />
    </S.Container>
  );
};

export default folderDetailPage;
