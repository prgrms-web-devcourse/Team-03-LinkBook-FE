import { useState } from 'react';
import { CommentInput } from '../index';
import * as S from './Comment.style';
import { Comment, CreateOrUpdateComment } from '../../types/comment';
import { deleteComment, updateComment } from '../../apis/CommentAPI';
import CommentItem from './CommentItem';

interface Props {
  comment: Comment;
  folderId: number;
}

const CommentComponent = ({ comment, folderId }: Props) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showInputArea, setShowInputArea] = useState(false);
  const { id, content, children } = comment;

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleShowInputArea = () => {
    setShowInputArea(!showInputArea);
  };

  const tempUserID: number = 5;
  const tempToken: string =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjYwMTI4ODYxLCJpYXQiOjE2NjAxMjUyNjEsImVtYWlsIjoianVuZ21pbWluZ0BnbWFpbC5jb20ifQ.F5N76kkVG2WGgL-A5cLQi7cpSClfpA1CPqIEMNHCh3u9CiRXFy00pKzEpxaeIkVMLn-L1MrJ0drDC5nttAWtsw';

  const handleClickUpdateComment = () => {
    const newComment: CreateOrUpdateComment = {
      id,
      content,
      folderId,
      userId: tempUserID,
    };
    console.log(newComment);

    try {
      const res = updateComment(newComment, tempToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDeleteComment = () => {
    const confirmDelete = confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      const res = deleteComment(id, tempToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container key={id}>
      <CommentItem
        comment={comment}
        onClickUpdate={handleClickUpdateComment}
        onClickDelete={handleClickDeleteComment}
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
                  onClickUpdate={handleClickUpdateComment}
                  onClickDelete={handleClickDeleteComment}
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
