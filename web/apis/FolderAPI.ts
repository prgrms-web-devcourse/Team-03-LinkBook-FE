import axios from '.';
import {
  AllFolderList,
  GetFolderList,
  GetUserFolderList,
  SpecificFolder,
  SpecificUserFolderList,
} from '../types';
import {
  CreateOrUpdateFolder,
  FolderCreateOrUpdate,
  PinnedFolder,
} from '../types/folder';
import { FOLDERS, LIKES, USER } from './url';

// 폴더 리스트 전체 조회 (페이지, 정렬)
export const getFolderList = async (
  { page, size, sort }: GetFolderList,
  title?: any,
) => {
  const res = await axios.get(`${FOLDERS}`, {
    params: {
      page,
      size,
      sort,
      title,
    },
  });

  console.log(res);
  return res as unknown as AllFolderList;
};

// 특정 사용자 폴더리스트 조회
export const getUserFolderList = async (
  { id, isPrivate, page, size, sort }: GetUserFolderList,
  token?: string,
) => {
  const tokenData = token ? { 'Access-Token': token } : null;
  const res = await axios.get(`${FOLDERS}${USER}/${id}`, {
    headers: tokenData,
    params: {
      isPrivate,
      page,
      size,
      sort,
    },
  });

  console.log(res);
  return res as unknown as SpecificUserFolderList;
};

// 특정 폴더 조회

export const getFolder = async (id: number, token?: string) => {
  const tokenData = token
    ? {
        headers: {
          'Access-Token': token,
        },
      }
    : null;
  const res = await axios.get(`${FOLDERS}/${id}`, tokenData);

  console.log(res);
  return res as unknown as SpecificFolder;
};

// 로그인한 사용자의 고정된 폴더 조회
export const getPinnedFolder = async (token: string) => {
  const res = await axios.get(`${FOLDERS}/pinned`, {
    headers: {
      'Access-Token': token,
    },
  });

  return res as unknown as PinnedFolder;
};

// 루트 태그로 전체 폴더 조회
export const getRootTagFolder = async (
  { page, size, sort }: GetFolderList,
  rootTag: string,
) => {
  const res = await axios.get(`${FOLDERS}/root-tag/${rootTag}}`, {
    params: {
      page,
      size,
      sort,
    },
  });
  return res as unknown as AllFolderList;
};

// 하위 태그로 전체 폴더 조회
export const getTagFolder = async (
  { page, size, sort }: GetFolderList,
  tag: string,
) => {
  const res = await axios.get(`${FOLDERS}/tag/${tag}`, {
    params: {
      page,
      size,
      sort,
    },
  });

  return res as unknown as AllFolderList;
};

// 좋아요 눌른 폴더 조회
export const getLikeFolder = async (
  { page, size, sort }: GetFolderList,
  id: number,
) => {
  const res = await axios.get(`${LIKES}/${id}`, {
    params: {
      page,
      size,
      sort,
    },
  });

  return res as unknown as AllFolderList;
};

// 폴더 생성 (북마크까지) => 미개발
// Headers : Access Token 필요
export const createFolder = async (
  {
    title,
    image,
    content,
    isPinned,
    isPrivate,
    tags,
    bookmarks,
    originId,
  }: CreateOrUpdateFolder,
  token: string,
) => {
  const data = {
    title,
    image,
    content,
    isPinned,
    isPrivate,
    tags,
    bookmarks,
    originId,
  };
  console.log(data);
  const res = await axios.post(`${FOLDERS}`, data, {
    headers: {
      'Access-Token': token,
    },
  });

  console.log(res);
  return res as unknown as FolderCreateOrUpdate;
};

// 폴더 수정 (북마크까지) => 미개발
// Headers : Access Token 필요
export const updateFolder = async (
  {
    id,
    title,
    image,
    content,
    isPinned,
    isPrivate,
    tags,
    bookmarks,
  }: CreateOrUpdateFolder,
  token: string,
) => {
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
        'Access-Token': token,
      },
    },
  );

  console.log(res);
  return res;
};

// 폴더 삭제
// Headers : Access Token 필요
export const deleteFolder = async (id: number, token: string) => {
  const res = await axios.delete(`${FOLDERS}/${id}`, {
    headers: {
      'Access-Token': token,
    },
  });

  console.log(res);
  return res;
};
