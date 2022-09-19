import React, { useCallback } from 'react';
import { Input } from '../../../../components';
import * as S from './BookmarkInput.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Bookmark } from '../../../../types';

export interface Props {
  bookmarks: Bookmark[];
  setBookmarks: (item: Bookmark[]) => void;
}

export const BookmarkInput = ({ bookmarks, setBookmarks }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Bookmark>();

  const addBookmark: SubmitHandler<Bookmark> = useCallback(
    (data, e) => {
      e.preventDefault();
      let { title, url } = data;
      title = title || '제목 없음';

      const newBookmarks = [...bookmarks, { title, url }];
      setBookmarks(newBookmarks);

      reset({ title: '', url: '' });
    },
    [bookmarks],
  );

  return (
    <S.BookmarkInputContainer onSubmit={handleSubmit(addBookmark)}>
      <Input
        type="text"
        placeholder="북마크 제목을 입력해주세요"
        {...register('title', {
          required: '제목은 필수 입력입니다.',
        })}
      />
      {errors.title && <span>{errors.title.message}</span>}
      <Input
        type="text"
        placeholder="url을 입력해주세요"
        {...register('url', {
          required: 'url은 필수 입력입니다.',
        })}
      />
      {errors.url && <span>{errors.url.message}</span>}
      <S.BookmarkButton type="submit">북마크 추가하기 +</S.BookmarkButton>
    </S.BookmarkInputContainer>
  );
};

export default React.memo(BookmarkInput);
