import React, {
  ButtonHTMLAttributes,
  FormEventHandler,
  useCallback,
  useRef,
} from 'react';
import { Input } from '../../../../components';
import * as S from './BookmarkInput.style';
// import type { CreateBookmark } from '../../../../types/bookmark';

interface Bookmark {
  id?: number;
  title: string;
  url: string;
}

export interface Props {
  bookmarks: Bookmark[];
  setBookmarks: (item: Bookmark[]) => void;
}

export const BookmarkInput = ({ bookmarks, setBookmarks }: Props) => {
  const titleInput = useRef<HTMLInputElement>();
  const urlInput = useRef<HTMLInputElement>();

  const addBookmark = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const title = titleInput.current.value || '제목 없음';
      const url = urlInput.current.value;
      const newBookmarks = [...bookmarks, { title, url }];
      setBookmarks(newBookmarks);

      titleInput.current.value = '';
      urlInput.current.value = '';
    },
    [bookmarks],
  );

  return (
    <S.BookmarkInputContainer onSubmit={addBookmark}>
      <Input
        ref={titleInput}
        type="text"
        placeholder="북마크 제목을 입력해주세요"
      />
      <Input ref={urlInput} type="text" placeholder="url을 입력해주세요" />
      <S.BookmarkButton type="submit">북마크 추가하기 +</S.BookmarkButton>
    </S.BookmarkInputContainer>
  );
};

export default React.memo(BookmarkInput);
