import { UserInfo, SpecificUserFolders, Folder } from '../@types/DummyDataType';

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
      name: '알고리즘 공부용',
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      isPinned: true,
      isPrivate: false,
      likes: 5,
      user: {
        id: 1,
        name: '이수연',
        image: '이미지 url',
      },
      tags: ['코딩', '개발', '취미'],
    },
    {
      id: 2,
      name: '마케팅 인사이트',
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      isPinned: true,
      isPrivate: false,
      likes: 10,
      user: {
        id: 1,
        name: '이수연',
        image: '',
      },
      tags: ['창업', '마케팅', '취미'],
    },
  ],
  user: {
    id: 1,
    name: '이수연',
    image: '',
  },
};

// 특정 폴더 조회하기
export const specificFolder: Folder = {
  id: 1,
  name: '알고리즘 공부용',
  image: '이미지 url',
  content: 'python으로 공부합니다.',
  originId: null,
  isPinned: true,
  isPrivate: false,
  likes: 5,
  comments: [
    {
      id: 1,
      parentId: null,
      content: '도움이 많이 되었습니다.',
      user: {
        id: 2,
        name: '이지연',
        image: '이미지 url',
      },
      createdAt: '',
      updatedAt: ' ',
    },
  ],
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
    image: '이미지 url',
  },
  tags: ['코딩', '개발', '취미'],
};
