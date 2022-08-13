import * as S from './CommentItem.style';
import { Comment, CreateOrUpdateComment } from '../../../types/comment';
import { deleteComment, updateComment } from '../../../apis/CommentAPI';
import { useRef, useState } from 'react';
import { CommentInput, Profile } from '../../index';

interface Props {
  comment: Comment;
  folderId: number;
  userId?: number;
  token?: string;
}

const CommentItem = ({ comment, folderId, userId, token }: Props) => {
  const { id, content, user, createdAt } = comment;
  const [updating, setUpdating] = useState(false);
  const updateInputRef = useRef<HTMLTextAreaElement>(null);

  const handleShowUpdateArea = () => {
    setUpdating(!updating);
  };

  const handleClickUpdateComment = async () => {
    if (!updateInputRef) return;

    const newComment: CreateOrUpdateComment = {
      id,
      content: updateInputRef.current.value,
      folderId,
      userId,
    };

    try {
      await updateComment(newComment, token);
      setUpdating(!updating);
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다.');
    }
  };

  const handleClickDeleteComment = async () => {
    const confirmDelete = confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await deleteComment(id, token);
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다.');
    }
  };

  return (
    <S.Container key={id}>
      <S.HeaderWrapper>
        <Profile
          version="comment"
          user={user}
          createdAt={`${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`}
          iconSize={50}
        />
        {userId === user.id && (
          <>
            {updating ? (
              <S.ButtonsWrapper>
                <S.Button onClick={handleClickUpdateComment}>수정완료</S.Button>
                |<S.Button onClick={handleShowUpdateArea}>수정취소</S.Button>
              </S.ButtonsWrapper>
            ) : (
              <S.ButtonsWrapper>
                <S.Button onClick={handleShowUpdateArea}>수정</S.Button>
                <S.Button onClick={handleClickDeleteComment}>삭제</S.Button>
              </S.ButtonsWrapper>
            )}
          </>
        )}
      </S.HeaderWrapper>
      {updating ? (
        <CommentInput
          version="update"
          folderId={folderId}
          defaultValue={content}
          ref={updateInputRef}
          placeholder="수정할 댓글을 입력해주세요."
        />
      ) : (
        <S.BodyWrapper>{content}</S.BodyWrapper>
      )}
    </S.Container>
  );
};

export default CommentItem;
