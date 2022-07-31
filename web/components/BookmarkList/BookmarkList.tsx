import BookmarkItem from '../BookmarkItem';
import * as S from './BookmarkList.style';
import { Bookmark } from '../../shared/DummyDataType';

interface Props {
  onBookmarkClick: () => void;
  onIconClick?: () => void;
  bookmarkItems: Bookmark[];
}

const BookmarkList = ({
  onBookmarkClick,
  bookmarkItems,
  onIconClick,
}: Props) => {
  return (
    <S.BookmarkContainer>
      {bookmarkItems &&
        bookmarkItems.map(({ id, title, url }) => (
          <BookmarkItem
            key={id}
            onBookmarkClick={onBookmarkClick}
            onIconClick={onIconClick}
            url={url}
            title={title}
          />
        ))}
    </S.BookmarkContainer>
  );
};

export default BookmarkList;
