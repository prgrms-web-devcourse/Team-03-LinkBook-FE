import { useRouter } from 'next/router';
import * as S from './folderDetail.style';
import { ContentSection, CommentSection } from './components';

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
