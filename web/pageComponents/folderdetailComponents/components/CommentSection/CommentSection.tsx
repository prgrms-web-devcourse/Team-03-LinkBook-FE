import * as S from './CommentSection.style';
import { useEffect, useRef, useState } from 'react';
import { CommentInput, Comment } from '../../../../components';
import { getFolderComment } from '../../../../apis/CommentAPI';
import { Comments, Comment as TComment } from '../../../../types';
import { useComments } from './contexts/CommentProvider';

interface Props {
  id?: number;
}

const CommentSection = ({ id }: Props) => {
  const [data, setData] = useState<Comments>(undefined);
  const { comments, setComments } = useComments();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const commentRes = await getFolderComment(id);
        setData(commentRes);
        setComments(commentRes.comments);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const getCommentsNum = (comments: Array<TComment>) => {
    return (
      comments.length + comments.reduce((a, c) => a + c.children.length, 0)
    );
  };

  return (
    <>
      {data && (
        <S.Container>
          {!data.isPrivate && (
            <>
              <S.Title>{getCommentsNum(comments)}개의 댓글</S.Title>
              <CommentInput version="comment" folderId={id} ref={inputRef} />
              {comments.map((comment: any) => {
                return (
                  <Comment
                    comment={comment}
                    folderId={id}
                    key={comment.id}
                    inputRef={inputRef}
                  />
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
