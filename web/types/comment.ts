import type { User } from './user';

// 댓글 생성 또는 수정 후 받는 response
export interface CommentCreateOrUpdate {
  id: number;
}

interface Comment {
  id: number;
  children: Comment[] | [];
  content: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Comments {
  comments: Comment[];
  isPrivate: boolean;
}
