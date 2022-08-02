export interface UserInfo {
  id?: string | number;
  email?: string;
  name: string;
  image: string;
  introduce?: string;
  interest?: string[];
}

export interface SpecificUserFolders {
  folders: Folder[];
  user: UserInfo;
}

export interface Folder {
  id: number;
  title: string;
  image: string;
  content?: string;
  originId?: string | number | null;
  isPinned?: boolean;
  isPrivate?: boolean;
  likes: string | number;
  user?: UserInfo;
  comments?: Comment[];
  bookmarks?: Bookmark[];
  tags?: string[];
  createdAt?: string;
}

export interface Comment {
  id: string | number;
  content: string;
  user: UserInfo;
  createdAt: string;
  updatedAt: string;
  children?: Array<Comment> | [];
}

export interface Bookmark {
  id: string | number;
  url: string;
  title: string;
}

export interface AllFolders {}
