// 댓글 생성 또는 수정 후 받는 response
export interface CommentCreateOrUpdate {
  id: number;
}

interface User {
  id: number;
  email: string;
  name: string;
  image: string;
  introduce: string;
}

interface Comment {
  id: number;
  children: Comment[];
  content: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Comments {
  comments: Comment[];
  isPrivate: boolean;
}
