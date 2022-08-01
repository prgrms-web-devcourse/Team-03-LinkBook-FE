import { Comment, Profile, CommentInput } from '../../components';
import * as S from './information.style';

const informationPage = () => {
  const user = {
    email: 'example1@gmail.com',
    name: '익명의 사용자',
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    interest: ['개발', '쇼핑'],
    introduce: '한 줄 소개입니다.',
  };

  const data = [
    {
      id: 1,
      content:
        '도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ 도움이 많이 되었습니다. 겁나게 긴 댓글을 작성해볼게요~~~~~~~~~~ ',
      user: {
        id: 2,
        name: '이지연',
        image:
          'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
      createdAt: '2022-07-23',
      updatedAt: ' ',
      children: [
        {
          id: 11,
          content: '대댓글 1',
          user: {
            id: 3,
            name: '해윰',
            image:
              'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          },
          createdAt: '2022-07-29',
          updatedAt: ' ',
        },
        {
          id: 12,
          content: '대댓글 2',
          user: {
            id: 3,
            name: '해윰',
            image:
              'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          },
          createdAt: '2022-08-01',
          updatedAt: ' ',
        },
      ],
    },
    {
      id: 2,
      content: '도움이 많이 되었습니다.2',
      user: {
        id: 3,
        name: '정지영',
        image:
          'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
      createdAt: '2022-07-25',
      updatedAt: ' ',
      children: [],
    },
  ];
  return (
    <S.Container>
      <S.HeadLine>1. Profile Component</S.HeadLine>
      <Profile user={user} />
      <S.HeadLine>2. CommentInput Component</S.HeadLine>
      <CommentInput />
      <S.HeadLine>
        3. Comment Component (모아서 CommentList Component 생성 예정)
      </S.HeadLine>
      {data.map((d) => (
        <Comment comment={d} key={d.id} />
      ))}
    </S.Container>
  );
};

export default informationPage;
