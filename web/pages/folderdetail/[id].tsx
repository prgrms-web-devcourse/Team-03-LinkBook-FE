import { useRouter } from 'next/router';
import {
  CommentSection,
  ContentSection,
} from '../../pageComponents/folderdetailComponents/components';
import * as S from '../../styles/pageStyles/folderDetail.style';

const folderDetailPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <S.Container>
      <ContentSection id={Number(id)} />
      <S.Line />
      <CommentSection id={Number(id)} />
    </S.Container>
  );
};

export default folderDetailPage;
