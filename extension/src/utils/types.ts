export interface User {
  id: number;
  email: string;
  name: string;
  image: string;
  introduce: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignUpOrIn {
  email: string;
  password: string;
}

export interface LogInResponse {
  accessToken: string;
  refreshToken: string;
  isFirstLogin: boolean;
  user: User;
}

export interface ReissuanceAccessToken {
  accessToken: string;
  user: User;
}

interface Sort {
  unsorted: boolean;
  empty: boolean;
  sorted: boolean;
}

export interface Folder {
  id: number;
  title: string;
  content: string;
  image: string;
  isPinned: boolean;
  isPrivate: boolean;
  user: User;
  tags: string[];
  likes: number;
  isLiked: boolean;
  createdAt: string;
}

interface Page {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Bookmark {
  id: number;
  url: string;
  title: string;
}

// 전체 폴더리스트 조회
export interface AllFolderList {
  folders: {
    content: Folder[] | [];
    pageable: Page;
    last: boolean;
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    sort: Sort;
    number: number;
    first: boolean;
    size: number;
    empty: boolean;
  };
}

// 특정사용자의 폴더리스트 조회
export interface SpecificUserFolderList {
  userResponse: User;
  folders: AllFolderList;
}

//폴더 생성 리스폰스
export interface CreateFolderRes {
  id: number;
}
