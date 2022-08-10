import { MouseEventHandler } from 'react';
import { Comment } from '../../../types/comment';
import Profile from '../../Profile';
import * as S from './CommentItem.style';

interface Props {
  comment: Comment;
  onClickUpdate: MouseEventHandler;
  onClickDelete: MouseEventHandler;
}

const CommentItem = ({ comment, onClickUpdate, onClickDelete }: Props) => {
  const { id, content, user, createdAt } = comment;
  return (
    <S.Container key={id}>
      <S.HeaderWrapper>
        <Profile
          version="comment"
          user={user}
          createdAt={`${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`}
          iconSize={50}
        />
        {5 === user.id && (
          <S.ButtonsWrapper>
            <S.Button onClick={onClickUpdate}>수정</S.Button>|
            <S.Button onClick={onClickDelete}>삭제</S.Button>
          </S.ButtonsWrapper>
        )}
      </S.HeaderWrapper>
      <S.BodyWrapper>{content}</S.BodyWrapper>
    </S.Container>
  );
};

export default CommentItem;
