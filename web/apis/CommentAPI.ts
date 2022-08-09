import axios from '.';
import { Comments, CreateOrUpdateComment } from '../types';
import { FOLDERS, COMMENTS } from './url';

// 특정 폴더 댓글 조회
export const getFolderComment = async (id: string | string[]) => {
  const res = await axios.get(`${COMMENTS}${FOLDERS}/${id}`);

  console.log(res);
  return res as unknown as Comments;
};

// 댓글 작성
// Headers : Access Token 필요
export const createComment = async ({
  content,
  folderId,
  userId,
  parentId,
}: CreateOrUpdateComment) => {
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
        'Access-Token':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjYwMDY4NTMzLCJpYXQiOjE2NjAwNjQ5MzMsImVtYWlsIjoiOTAzeWhAbmF2ZXIuY29tIn0.Kxug26ko-HOnmPVHgY4PW2CMc4u7QTPyiQCZ93u8IaUeR5CxmA_Jk6MkVjImM-eSYFvDlIUi6WW1VfMP3UoSHg',
      },
    },
  );

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
export const deleteComment = async (id: string) => {
  const res = await axios.put(`${COMMENTS}/${id}`);

  console.log(res);
  return res;
};
