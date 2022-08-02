import { UserInfo, SpecificUserFolders, Folder } from './DummyDataType';

//내 정보 조회
export const myInfo: UserInfo = {
  email: 'example1@gmail.com',
  name: '익명의 사용자',
  image: '',
  interest: ['개발', '쇼핑'],
};

//특정 사용자의 폴더리스트 조회
export const specificUserFolders: SpecificUserFolders = {
  folders: [
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
    {
      id: 2,
      title: '마케팅 인사이트',
      content: '공부하자 공부',
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      isPinned: true,
      isPrivate: false,
      likes: 10,
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
        image: '',
      },
      tags: ['창업', '마케팅', '취미'],
      createdAt: '2022-07-25',
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
  ],
  user: {
    id: 1,
    name: '해윰',
    image: '',
  },
};

// 특정 폴더 조회하기
export const specificFolder: Folder = {
  id: 1,
  title: '알고리즘 공부용',
  image:
    'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  content: 'python으로 공부합니다. 내용을 조금 더 길게 해볼게요',
  originId: null,
  isPinned: true,
  isPrivate: false,
  likes: 5,
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
    {
      id: 11,
      content: '도움이 많이 되었습니다.4',
      user: {
        id: 12,
        name: '댓글작성자1',
        image:
          'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
      createdAt: '2022-08-01',
      updatedAt: '2022-08-02',
      children: [
        {
          id: 111,
          content: '도움이 많이 되었습니다.5',
          user: {
            id: 12,
            name: '대댓글작성자1',
            image:
              'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          },
          createdAt: '2022-08-02',
          updatedAt: '2022-08-03',
        },
        {
          id: 111,
          content: '도움이 많이 되었습니다.6',
          user: {
            id: 12,
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
  bookmarks: [
    {
      id: 1,
      url: 'https://naver.com',
      title: '네이버1',
    },
    {
      id: 2,
      url: 'https://naver.com',
      title: '네이버2',
    },
  ],
  user: {
    id: 1,
    name: 'Haeyum',
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    introduce: '한 줄 소개입니다 ~~~~~~~~~~~~',
  },
  tags: ['코딩', '개발', '취미'],
  createdAt: '2022-08-01',
};

export const allFolders: Folder[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '일주일 자취 음식 레시피 모음! 어느새 나도 요리사?',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,

        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,

        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '프론트엔드 개발자를 위한 학습 로드맵',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,
        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '깃허브 유용한 레포 모음 - 개발자.ver',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,
        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '일주일 자취 음식 레시피 모음! 어느새 나도 요리사?',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,
        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '프론트엔드 개발자를 위한 학습 로드맵',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,
        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: '깃허브 유용한 레포 모음 - 개발자.ver',
    tags: ['코딩', '개발', '취미'],
    user: {
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Miral',
    },
    createdAt: '2022-07-28',
    likes: 154,
    bookmarks: [
      {
        id: 1,
        title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
        url: 'https://www.naver.com/',
      },
      {
        id: 2,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 3,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 4,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 5,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 6,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 7,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 8,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
      {
        id: 9,
        title: 'Baekjoon Online Judge',
        url: 'https://www.acmicpc.net/',
      },
    ],
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
