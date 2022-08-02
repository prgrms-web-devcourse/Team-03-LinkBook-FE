import CommentComponent from '../../../../components/Comment';
import { Comment } from '../../../../shared/DummyDataType';

interface Props {
  comments?: Comment[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <>
      {comments?.map((comment: Comment) => {
        return <CommentComponent comment={comment} key={comment.id} />;
      })}
    </>
  );
};

export default CommentList;
