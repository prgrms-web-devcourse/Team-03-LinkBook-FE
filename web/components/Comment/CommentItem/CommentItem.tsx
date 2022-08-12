import * as S from './CommentItem.style';
import { Comment, CreateOrUpdateComment } from '../../../types/comment';
import { deleteComment, updateComment } from '../../../apis/CommentAPI';
import { useRef, useState } from 'react';
import { CommentInput, Profile } from '../../index';
import { TEMP_TOKEN, TEMP_USER_ID } from '../../../constants/alert.constants';

interface Props {
  comment: Comment;
  folderId: number;
}

const CommentItem = ({ comment, folderId }: Props) => {
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
      userId: TEMP_USER_ID,
    };

    try {
      await updateComment(newComment, TEMP_TOKEN);
      setUpdating(!updating);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDeleteComment = async () => {
    const confirmDelete = confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await deleteComment(id, TEMP_TOKEN);
    } catch (error) {
      console.log(error);
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
        {TEMP_USER_ID === user.id && (
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
        <>
          <CommentInput
            version="update"
            folderId={folderId}
            defaultValue={content}
            ref={updateInputRef}
          />
        </>
      ) : (
        <S.BodyWrapper>{content}</S.BodyWrapper>
      )}
    </S.Container>
  );
};

export default CommentItem;
