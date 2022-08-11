interface User {
  id: number;
  name: string;
  image: string;
}

interface Sort {
  unsorted: boolean;
  empty: boolean;
  sorted: boolean;
}

interface Folder {
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

interface Bookmark {
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

//특정 폴더 조회
export interface SpecificFolder extends Folder {
  content: string;
  originId: string;
  bookmarks: Bookmark[] | [];
}

// 폴더 생성 또는 수정 후 받는 response
export interface FolderCreateOrUpdate {
  id: number;
}

export interface CreateOrUpdateFolder {
  title: string;
  image: string;
  content: string;
  isPinned: boolean;
  isPrivate: boolean;
  tags: string[];
  bookmarks: Bookmark[] | [];
  originId?: number;
}

// Req Body type
export interface GetFolderList {
  page: number;
  size: number;
  sort: string;
}

export interface GetUserFolderList {
  id: string;
  isPrivate: boolean;
  page: number;
  size: number;
  sort: string;
}
