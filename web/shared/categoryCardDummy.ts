const CardDummyData = [
  {
    id: 1,
    title: '알고리즘 공부용',
    content: '공부하자 공부',
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    isPinned: true,
    isPrivate: false,
    likes: 5,
    bookmarks: [
      {
        id: 1,
        url: 'https://naver.com',
        title: '네이버',
      },
    ],
    user: {
      id: 1,
      name: '이수연',
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    tags: ['코딩', '개발', '취미'],
    createdAt: '2022-07-23',
    comments: [
      {
        id: 1,
        content: '도움이 많이 되었습니다.1',
        user: {
          id: 2,
          name: '댓글작성자1',
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        createdAt: '2022-08-01',
        updatedAt: '2022-08-02',
        children: [
          {
            id: 1,
            content: '도움이 많이 되었습니다.2',
            user: {
              id: 2,
              name: '대댓글작성자1',
              image:
                'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            },
            createdAt: '2022-08-02',
            updatedAt: '2022-08-03',
          },
          {
            id: 1,
            content: '도움이 많이 되었습니다.3',
            user: {
              id: 2,
              name: '대댓글작성자2',
              image:
                'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            },
            createdAt: '2022-08-03',
            updatedAt: '2022-08-04',
          },
        ],
      },
    ],
  },
];
export default CardDummyData;
