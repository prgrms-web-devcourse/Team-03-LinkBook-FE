import { FAVICON_IMAGE } from '../../shared/common';
import { Icon, Avatar, Text } from '..';
import * as S from './BookmarkItem.style';

interface Props {
  url?: string;
  title?: string;
  onBookmarkClick: () => void;
  onIconClick?: () => void;
}

const BookmarkItem = ({ url, title, onBookmarkClick, onIconClick }: Props) => {
  return (
    <S.BookmarkWrapper onClick={onBookmarkClick}>
      <S.BookmarkItem>
        <Avatar
          src={url ? `${FAVICON_IMAGE}${url}&sz=256` : '/icons/star.svg'}
          size={40}
        />
        {title ? (
          <Text>{title}</Text>
        ) : (
          <input placeholder="링크를 입력해 주세요" />
        )}
      </S.BookmarkItem>
      {url && (
        <S.IconWrapper onClick={onIconClick}>
          <Icon name="clip" size={20} />
        </S.IconWrapper>
      )}
    </S.BookmarkWrapper>
  );
};

export default BookmarkItem;
