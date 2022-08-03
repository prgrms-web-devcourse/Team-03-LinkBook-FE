import * as S from './CommentSection.style';
import { CommentInput } from '../../../../components';
import CommentList from './CommentList';
import { specificFolder } from '../../../../shared/DummyData';

interface Props {
  params?: string | string[];
}

const CommentSection = ({ params }: Props) => {
  console.log(params);
  const { comments, isPrivate } = specificFolder;

  return (
    <S.Container>
      {!isPrivate && (
        <>
          <S.CommentTitle>{comments.length}개의 댓글</S.CommentTitle>
          <CommentInput version="comment" />
          <CommentList comments={comments} />
        </>
      )}
    </S.Container>
  );
};

export default CommentSection;
