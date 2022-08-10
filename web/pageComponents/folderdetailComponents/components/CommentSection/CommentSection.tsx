import * as S from './CommentSection.style';
import { CommentInput, Comment } from '../../../../components';
import { Comments } from '../../../../types';

interface Props {
  id?: number;
  data?: Comments;
}

const CommentSection = ({ id, data }: Props) => {
  const { comments, isPrivate } = data;

  return (
    <S.Container>
      {!isPrivate && (
        <>
          <S.Title>{comments.length}개의 댓글</S.Title>
          <CommentInput version="comment" folderId={id} />
          {comments?.map((comment) => {
            return <Comment comment={comment} folderId={id} key={comment.id} />;
          })}
        </>
      )}
    </S.Container>
  );
};

export default CommentSection;
