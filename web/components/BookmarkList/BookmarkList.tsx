import BookmarkItem from '../BookmarkItem';
import * as S from './BookmarkList.style';
import { useCallback } from 'react';
import { Bookmark } from '../../types';

interface Props {
  version: 'watch' | 'update';
  bookmarkItems: Bookmark[];
  setBookmarks?: (item: object[]) => void;
}

const BookmarkList = ({ version, bookmarkItems, setBookmarks }: Props) => {
  const onRemove = useCallback(
    (event: React.MouseEvent, removeUrl: string) => {
      event.stopPropagation();
      event.preventDefault();

      const newBookmarks = bookmarkItems.filter(({ url }) => url !== removeUrl);
      setBookmarks(newBookmarks);
    },
    [bookmarkItems],
  );

  return (
    <S.BookmarkContainer>
      {bookmarkItems &&
        bookmarkItems.map(({ id, title, url }, i) => (
          <BookmarkItem
            key={id || i + 100}
            url={url}
            title={title}
            version={version}
            onRemove={onRemove}
          />
        ))}
    </S.BookmarkContainer>
  );
};

export default BookmarkList;
