import BookmarkItem from '../BookmarkItem';
import * as S from './BookmarkList.style';
import { Bookmark } from '../../shared/DummyDataType';
import React from 'react';

interface Props {
  version: 'watch' | 'update';
  bookmarkItems: Bookmark[];
}

const BookmarkList = ({ version, bookmarkItems }: Props) => {
  return (
    <S.BookmarkContainer>
      {bookmarkItems &&
        bookmarkItems.map(({ id, title, url }) => (
          <BookmarkItem key={id} url={url} title={title} version={version} />
        ))}
    </S.BookmarkContainer>
  );
};

export default BookmarkList;
