import { useState } from 'react';
import { Comment } from '../../shared/DummyDataType';
import { Profile } from '../index';
import * as S from './Comment.style';

interface Props {
  comment: Comment;
}

const CommentComponent = ({ comment }: Props) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showInputArea, setShowInputArea] = useState(false);
  const { id, content, user, createdAt, children } = comment;

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleShowInputArea = () => {
    setShowInputArea(!showInputArea);
  };

  return (
    <S.Container key={id}>
      <S.ProfileContainer>
        <Profile
          version="comment"
          user={user}
          createdAt={createdAt}
          iconSize={50}
        />
      </S.ProfileContainer>
      <S.CommentContainer>{content}</S.CommentContainer>
      {children?.length === 0 ? (
        <S.RepliesButton>답글 달기 +</S.RepliesButton>
      ) : (
        <S.RepliesButton onClick={handleShowReplies}>
          {children?.length}개의 답글 {showReplies ? '숨기기 ▲' : '확인 ▼'}
        </S.RepliesButton>
      )}
      <S.RepliesContainer>
        {showReplies &&
          children?.map((child, index) => {
            const { id, content, user, createdAt } = child;

            return (
              <>
                <S.ReplyContainer key={id}>
                  <S.ProfileContainer>
                    <Profile
                      version="comment"
                      user={user}
                      createdAt={createdAt}
                      iconSize={50}
                    />
                  </S.ProfileContainer>
                  <S.CommentContainer>{content}</S.CommentContainer>
                </S.ReplyContainer>
                {index === children.length - 1 && (
                  <S.RepliesButton>답글 달기 +</S.RepliesButton>
                )}
              </>
            );
          })}
      </S.RepliesContainer>
    </S.Container>
  );
};

export default CommentComponent;
