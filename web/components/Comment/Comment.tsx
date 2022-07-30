import { Comment } from '../../shared/DummyDataType';
import Profile from '../Profile';
import * as S from './Comment.style';

// comments: [
// 	{
// 		id: 1,
// 		parentId: null,
// 		content: '도움이 많이 되었습니다.',
// 		user: {
// 			id: 2,
// 			name: '이지연',
// 			image:
// 				'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
// 			introduce: '한 줄 소개'
// 		},
// 		createdAt: '',
// 		updatedAt: ' ',
// 	},
// ],

interface Props {
  comment: Comment;
}

const CommentComponent = ({ comment }: Props) => {
  const { id, parentId, content, user, createdAt } = comment;

  return (
    <S.Container key={id}>
      <S.ProfileContainer>
        <Profile
          version="comment"
          user={user}
          createdAt={createdAt}
          iconSize={50}
        />
      </S.ProfileContainer>
      <S.CommentContainer>{content}</S.CommentContainer>
      {parentId === null && <S.RepliesButton>답글 달기 +</S.RepliesButton>}
      <S.RepliesContainer />
    </S.Container>
  );
};

export default CommentComponent;
