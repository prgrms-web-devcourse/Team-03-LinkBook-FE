interface User {
  id: number;
  email: string;
  name: string;
  image: string;
  introduce: string;
}

interface Sort {
  empty: boolean;
  unsorted: boolean;
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

interface Folders {
  content: Folder[] | [];
  pageable: Page;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
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
  folders: Folders;
}

// 특정사용자의 폴더리스트 조회
export interface SpecificUserFolderList {
  user: User;
  folders: Folders;
}

//특정 폴더 조회
export interface SpecificFolder extends Folder {
  content: string;
  originId: string;
  bookmarks: Bookmark[] | [];
  originFolder: null | OriginFolder;
}

export interface OriginFolder {
  id: number;
  title: string;
  user: OriginUser;
}

export interface OriginUser {
  id: number;
  name: string;
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
