import axios from '.';
import { CreateOrUpdateComment } from '../types';
import { FOLDERS, COMMENTS } from './url';

// 특정 폴더 댓글 조회
export const getFolderComment = async (id: number) => {
  const res = await axios.get(`${COMMENTS}${FOLDERS}/${id}`);

  console.log(res);
  return res;
};

// 댓글 작성
// Headers : Access Token 필요
export const createComment = async ({
  content,
  folderId,
  userId,
  parentId,
}: CreateOrUpdateComment) => {
  const res = await axios.post(`${COMMENTS}`, {
    content,
    folderId,
    userId,
    parentId,
  });

  console.log(res);
  return res;
};

// 댓글 수정
// Headers : Access Token 필요
export const updateComment = async ({
  id,
  content,
  folderId,
  userId,
  parentId,
}: CreateOrUpdateComment) => {
  const res = await axios.put(`${COMMENTS}/${id}`, {
    content,
    folderId,
    userId,
    parentId,
  });

  console.log(res);
  return res;
};

// 댓글 삭제
// Headers : Access Token 필요
export const deleteComment = async (id: number) => {
  const res = await axios.put(`${COMMENTS}/${id}`);

  console.log(res);
  return res;
};
