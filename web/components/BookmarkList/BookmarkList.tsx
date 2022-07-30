import BookmarkItem from '../BookmarkItem';
import * as S from './BookmarkList.style';

interface Bookmark {
  id: string | number;
  title: string;
  url: string;
}

interface Props {
  onClick: () => void;
  bookmarkItems: Bookmark[];
}

const BookmarkList = ({ onClick, bookmarkItems }: Props) => {
  return (
    <S.BookmarkContainer>
      {bookmarkItems &&
        bookmarkItems.map(({ id, title, url }) => (
          <BookmarkItem
            key={id}
            onBookmarkClick={onClick}
            url={url}
            title={title}
          />
        ))}
    </S.BookmarkContainer>
  );
};

export default BookmarkList;
