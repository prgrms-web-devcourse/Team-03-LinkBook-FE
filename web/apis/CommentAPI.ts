import axios from '.';
import { Comments, CreateOrUpdateComment } from '../types';
import { CommentCreateOrUpdate } from '../types/comment';
import { FOLDERS, COMMENTS } from './url';

// 특정 폴더 댓글 조회
export const getFolderComment = async (id: number) => {
  const res = await axios.get(`${COMMENTS}${FOLDERS}/${id}`);

  return res as unknown as Comments;
};

// 댓글 작성
// Headers : Access Token 필요
export const createComment = async (
  { content, folderId, userId, parentId }: CreateOrUpdateComment,
  token: string,
) => {
  const res = await axios.post(
    `${COMMENTS}`,
    {
      content,
      folderId,
      userId,
      parentId,
    },
    {
      headers: {
        'Access-Token': token,
      },
    },
  );

  return res as unknown as CommentCreateOrUpdate;
};

// 댓글 수정
// Headers : Access Token 필요
export const updateComment = async (
  { id, content, folderId, userId }: CreateOrUpdateComment,
  token: string,
) => {
  const res = await axios.put(
    `${COMMENTS}/${id}`,
    {
      id,
      content,
      folderId,
      userId,
    },
    {
      headers: {
        'Access-Token': token,
      },
    },
  );

  return res;
};

// 댓글 삭제
// Headers : Access Token 필요
export const deleteComment = async (id: number, token: string) => {
  const res = await axios.delete(`${COMMENTS}/${id}`, {
    headers: {
      'Access-Token': token,
    },
  });

  return res;
};
