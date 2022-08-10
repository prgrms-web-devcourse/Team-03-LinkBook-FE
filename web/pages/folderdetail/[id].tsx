import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFolderComment } from '../../apis/CommentAPI';
import { getFolder } from '../../apis/FolderAPI';
import {
  CommentSection,
  ContentSection,
} from '../../pageComponents/folderdetailComponents/components';
import * as S from '../../styles/pageStyles/folderDetail.style';
import { Comments, SpecificFolder } from '../../types';

const folderDetailPage = () => {
  const [contentData, setContentData] = useState<SpecificFolder>();
  const [commentData, setCommentData] = useState<Comments>();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const id = Number(router.query.id);

    (async () => {
      try {
        const contentRes = await getFolder(id);
        const commentRes = await getFolderComment(id);
        setContentData(contentRes);
        setCommentData(commentRes);
      } catch (error) {
        console.log(error);
        router.push('/404');
      }
    })();
  }, []);

  return (
    <S.Container>
      {contentData && (
        <ContentSection id={Number(router.query.id)} data={contentData} />
      )}
      <S.Line />
      {commentData && (
        <CommentSection id={Number(router.query.id)} data={commentData} />
      )}
    </S.Container>
  );
};

export default folderDetailPage;
