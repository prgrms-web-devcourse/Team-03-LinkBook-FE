export interface Bookmark {
  id?: number;
  url: string;
  title: string;
}

export interface CreateBookmark {
  url: string;
  title: string;
  folderId: number;
}
