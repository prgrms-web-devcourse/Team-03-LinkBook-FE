import { useState } from 'react';
import { Profile, CommentInput } from '../index';
import * as S from './Comment.style';
import { Comment } from '../../types/comment';

interface Props {
  comment: Comment;
  folderId: number;
}

const CommentComponent = ({ comment, folderId }: Props) => {
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
          createdAt={`${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`}
          iconSize={50}
        />
      </S.ProfileContainer>
      <S.CommentContainer>{content}</S.CommentContainer>
      <S.ButtonContainer>
        <S.RepliesButton onClick={handleShowInputArea}>
          답글 달기 {showInputArea ? '-' : '+'}
        </S.RepliesButton>
        {children?.length !== 0 && (
          <S.RepliesButton onClick={handleShowReplies}>
            {children?.length}개의 답글 {showReplies ? '숨기기 ▲' : '확인 ▼'}
          </S.RepliesButton>
        )}
      </S.ButtonContainer>
      <S.RepliesContainer>
        {showInputArea && (
          <CommentInput version="comment" folderId={folderId} parentId={id} />
        )}
        {showReplies &&
          children?.map((child: Comment, index: number) => {
            return (
              <div key={child.id}>
                <S.ReplyContainer>
                  <S.ProfileContainer>
                    <Profile
                      version="comment"
                      user={child.user}
                      createdAt={`${child.createdAt.slice(
                        0,
                        10,
                      )} ${child.createdAt.slice(11, 19)}`}
                      iconSize={50}
                    />
                  </S.ProfileContainer>
                  <S.CommentContainer>{child.content}</S.CommentContainer>
                </S.ReplyContainer>
                {index !== children.length - 1 && <S.Line />}
              </div>
            );
          })}
      </S.RepliesContainer>
    </S.Container>
  );
};

export default CommentComponent;
