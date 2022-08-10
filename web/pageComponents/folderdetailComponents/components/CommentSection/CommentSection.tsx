import * as S from './CommentSection.style';
import { useEffect, useState } from 'react';
import { CommentInput, Comment } from '../../../../components';
import { Comments } from '../../../../types';
import { getFolderComment } from '../../../../apis/CommentAPI';

interface Props {
  id?: number;
}

const CommentSection = ({ id }: Props) => {
  const [data, setData] = useState<Comments>(undefined);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const commentRes = await getFolderComment(id);
        setData(commentRes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {data && (
        <S.Container>
          {!data.isPrivate && (
            <>
              <S.Title>{data.comments.length}개의 댓글</S.Title>
              <CommentInput version="comment" folderId={id} />
              {data.comments?.map((comment) => {
                return (
                  <Comment comment={comment} folderId={id} key={comment.id} />
                );
              })}
            </>
          )}
        </S.Container>
      )}
    </>
  );
};

export default CommentSection;
