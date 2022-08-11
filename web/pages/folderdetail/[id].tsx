import { useRouter } from 'next/router';
import * as S from '../../styles/pageStyles/folderDetail.style';
import {
  CommentSection,
  ContentSection,
} from '../../pageComponents/folderdetailComponents/components';

const folderDetailPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <S.Container>
      <ContentSection id={id} />
      <S.Line />
      <CommentSection id={id} />
    </S.Container>
  );
};

export default folderDetailPage;
