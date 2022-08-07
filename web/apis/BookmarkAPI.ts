import axios from '.';
import { BOOKMARKS } from './url';

// 특정 북마크 수정
// Headers : Access Token 필요
export const updateBookmark = async (
  id: string,
  url: string,
  title: string,
  folderId: string,
) => {
  const res = await axios.put(`${BOOKMARKS}/${id}`, {
    url,
    title,
    folderId,
  });

  console.log(res);
  return res;
};

// 특정 북마크 삭제
// Headers : Access Token 필요
export const deleteBookmark = async (id: string) => {
  const res = await axios.delete(`${BOOKMARKS}/${id}`);

  console.log(res);
  return res;
};
