import axios from '.';
import {
  CreateOrUpdateFolder,
  GetFolderList,
  GetUserFolderList,
  SpecificFolder,
} from '../types';
import { FOLDERS, USER } from './url';

const ACCESS_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjYxNDIzNDk2LCJpYXQiOjE2NjAyMTM4OTYsImVtYWlsIjoic2dtaW4yMDZAbmF2ZXIuY29tIn0.g196BRlE2_FMn4LwHBQ0EHnEP9hdM-6jLMiS7TL8qDn4zdn3LZhEE4mfZU4lORJTVEdIunH4RibPeleMZlpekQ';
// 폴더 리스트 전체 조회 (페이지, 정렬)
export const getFolderList = async ({ page, size, sort }: GetFolderList) => {
  const res = await axios.get(`${FOLDERS}`, {
    params: {
      page,
      size,
      sort,
    },
  });

  console.log(res);
  return res;
};

// 특정 사용자 폴더리스트 조회
export const getUserFolderList = async ({
  id,
  isPrivate,
  page,
  size,
  sort,
}: GetUserFolderList) => {
  const res = await axios.get(`${FOLDERS}${USER}/${id}`, {
    params: {
      isPrivate,
      page,
      size,
      sort,
    },
  });

  console.log(res);
  return res;
};

// 특정 폴더 조회
export const getFolder = async (id: number) => {
  const res = await axios.get(`${FOLDERS}/${id}`, {
    headers: {
      'Access-Token': ACCESS_TOKEN,
    },
  });

  console.log(res);
  return res as unknown as SpecificFolder;
};

// 폴더 생성 (북마크까지) => 미개발
// Headers : Access Token 필요
export const createFolder = async ({
  title,
  image,
  content,
  isPinned,
  isPrivate,
  tags,
  bookmarks,
}: CreateOrUpdateFolder) => {
  const res = await axios.post(
    `${FOLDERS}`,
    {
      title,
      image,
      content,
      isPinned,
      isPrivate,
      tags,
      bookmarks,
    },
    {
      headers: {
        'Access-Token': ACCESS_TOKEN,
      },
    },
  );

  console.log(res);
  return res;
};

// 폴더 수정 (북마크까지) => 미개발
// Headers : Access Token 필요
export const updateFolder = async ({
  id,
  title,
  image,
  content,
  isPinned,
  isPrivate,
  tags,
  bookmarks,
}: CreateOrUpdateFolder) => {
  const res = await axios.put(
    `${FOLDERS}/${id}`,
    {
      title,
      image,
      content,
      isPinned,
      isPrivate,
      tags,
      bookmarks,
    },
    {
      headers: {
        'Access-Token': ACCESS_TOKEN,
      },
    },
  );

  console.log(res);
  return res;
};

// 폴더 삭제
// Headers : Access Token 필요
export const deleteFolder = async (id: number) => {
  const res = await axios.delete(`${FOLDERS}/${id}`);

  console.log(res);
  return res;
};
