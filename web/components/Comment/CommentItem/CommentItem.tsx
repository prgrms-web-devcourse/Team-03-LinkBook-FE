import * as S from './CommentItem.style';
import { Comment, CreateOrUpdateComment } from '../../../types/comment';
import { deleteComment, updateComment } from '../../../apis/CommentAPI';
import { useRef, useState } from 'react';
import { CommentInput, Profile } from '../../index';
import { User } from '../../../types';

interface Props {
  comment: Comment;
  folderId: number;
  parentId?: number;
  userId?: number;
  token?: string;
  handleCreateComment?: (
    id: number,
    parentId: number,
    content: string,
    user: User,
  ) => void;
  handleDeleteComment: (id: number, parentId: number) => void;
  handleUpdateComment: (id: number, parentId: number, content: string) => void;
}

const CommentItem = ({
  comment,
  folderId,
  parentId = null,
  userId,
  token,
  handleCreateComment,
  handleDeleteComment,
  handleUpdateComment,
}: Props) => {
  const { id, content, user, createdAt } = comment;
  const [updating, setUpdating] = useState(false);
  const updateInputRef = useRef<HTMLTextAreaElement>(null);

  const handleShowUpdateArea = () => {
    setUpdating(!updating);
  };

  const handleClickUpdateComment = async () => {
    if (!updateInputRef) return;

    const editContent = updateInputRef.current.value;
    const newComment: CreateOrUpdateComment = {
      id,
      content: editContent,
      folderId,
      userId,
    };

    try {
      await updateComment(newComment, token);
      handleUpdateComment(id, parentId, editContent);
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
      handleDeleteComment(id, parentId);
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
          createdAt={`${createdAt.split('T')[0]}`}
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
          handleCreateComment={handleCreateComment}
        />
      ) : (
        <S.BodyWrapper>{content}</S.BodyWrapper>
      )}
    </S.Container>
  );
};

export default CommentItem;
