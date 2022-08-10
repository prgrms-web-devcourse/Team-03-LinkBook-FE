import { Comment, CreateOrUpdateComment } from '../../../types/comment';
import { deleteComment, updateComment } from '../../../apis/CommentAPI';
import Profile from '../../Profile';
import * as S from './CommentItem.style';

interface Props {
  comment: Comment;
  folderId: number;
}

const CommentItem = ({ comment, folderId }: Props) => {
  const { id, content, user, createdAt } = comment;
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
      <S.HeaderWrapper>
        <Profile
          version="comment"
          user={user}
          createdAt={`${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`}
          iconSize={50}
        />
        {5 === user.id && (
          <S.ButtonsWrapper>
            <S.Button onClick={handleClickUpdateComment}>수정</S.Button>|
            <S.Button onClick={handleClickDeleteComment}>삭제</S.Button>
          </S.ButtonsWrapper>
        )}
      </S.HeaderWrapper>
      <S.BodyWrapper>{content}</S.BodyWrapper>
    </S.Container>
  );
};

export default CommentItem;
