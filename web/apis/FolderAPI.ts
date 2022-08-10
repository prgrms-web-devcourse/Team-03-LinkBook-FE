import axios from '.';
import { GetFolderList, GetUserFolderList, SpecificFolder } from '../types';
import { CreateOrUpdateFolder, FolderCreateOrUpdate } from '../types/folder';
import { FOLDERS, USER } from './url';

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
  const res = await axios.get(`${FOLDERS}/${id}`);

  console.log(res);
  return res as unknown as SpecificFolder;
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
      originId: originId ? originId : null,
    },
    {
      headers: {
        'Access-Token': token,
      },
    },
  );

  console.log(res);
  return res as unknown as FolderCreateOrUpdate;
};

// 폴더 수정 (북마크까지) => 미개발
// Headers : Access Token 필요
export const updateFolder = async (id: number) => {
  const res = await axios.put(`${FOLDERS}/${id}`);

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
