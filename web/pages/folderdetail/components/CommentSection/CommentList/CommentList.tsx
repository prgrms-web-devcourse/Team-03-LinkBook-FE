import CommentComponent from '../../../../../components/Comment';
import { Comment } from '../../../../../shared/DummyDataType';
import * as S from './CommentList.style';

interface Props {
  comments?: Comment[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <S.Container>
      {comments?.map((comment: Comment) => {
        return <CommentComponent comment={comment} key={comment.id} />;
      })}
    </S.Container>
  );
};

export default CommentList;
