import axios from '.';
import { LIKES } from './url';

// 좋아요 생성
// headers: Access-Token 필요
export const createLike = async (folderId: number, userId: number) => {
  const res = await axios.post(`${LIKES}`, {
    folderId,
    userId,
  });

  console.log(res);
  return res;
};

// 좋아요 삭제
// headers: Access-Token 필요
export const deleteLike = async (id: number) => {
  const res = await axios.delete(`${LIKES}/${id}`);

  console.log(res);
  return res;
};
