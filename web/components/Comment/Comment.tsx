import * as S from './Comment.style';
import { useState } from 'react';
import { CommentInput } from '../index';
import { Comment } from '../../types/comment';
import CommentItem from './CommentItem';
import { getCookie } from '../../util/cookies';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';

interface Props {
  comment: Comment;
  folderId: number;
}

const CommentComponent = ({ comment, folderId }: Props) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showInputArea, setShowInputArea] = useState(false);
  const { id, children } = comment;
  const { user } = useRecoilValue(userInfo);
  const token = getCookie('ACCESS_TOKEN');

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleShowInputArea = () => {
    setShowInputArea(!showInputArea);
  };

  return (
    <S.Container key={id}>
      <CommentItem
        comment={comment}
        folderId={folderId}
        userId={user && user.id}
        token={token}
      />
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
                <CommentItem
                  comment={child}
                  folderId={folderId}
                  userId={user && user.id}
                  token={token}
                />
                {index !== children.length - 1 && <S.Line />}
              </div>
            );
          })}
      </S.RepliesContainer>
    </S.Container>
  );
};

export default CommentComponent;
