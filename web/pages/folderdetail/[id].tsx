import * as S from '../../styles/pageStyles/folderDetail.style';
import { useRouter } from 'next/router';
import {
  CommentSection,
  ContentSection,
} from '../../pageComponents/folderdetailComponents/components';
import { Seo } from '../../components';
import CommentsProvider from '../../contexts/CommentProvider';

const folderDetailPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <CommentsProvider>
      <S.Container>
        <Seo title="폴더 상세페이지 | 링북" />
        <ContentSection id={id} />
        <S.Line />
        <CommentSection id={id} />
      </S.Container>
    </CommentsProvider>
  );
};

export default folderDetailPage;
