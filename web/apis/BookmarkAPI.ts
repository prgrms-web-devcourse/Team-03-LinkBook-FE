import axios from '.';
import { CreateBookmark } from '../types/bookmark';
import { BOOKMARKS } from './url';

// 특정 북마크 생성
// Headers : Access Token 필요
export const updateBookmark = async ({
  url,
  title,
  folderId,
}: CreateBookmark) => {
  const res = await axios.put(`${BOOKMARKS}`, {
    url,
    title,
    folderId,
  });

  return res;
};

// 특정 북마크 삭제
// Headers : Access Token 필요
export const deleteBookmark = async (id: number) => {
  const res = await axios.delete(`${BOOKMARKS}/${id}`);

  return res;
};
