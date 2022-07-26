import { FAVICON_IMAGE } from '../../shared/common';
import { Icon, Avatar, Text } from '..';
import * as S from './BookmarkItem.style';
import { useCallback } from 'react';
import useCopyUrl from '../../hooks/useCopyUrl';

interface Props {
  url: string;
  title: string;
  version: 'watch' | 'update';
  onRemove?: any; // type 수정
}

const BookmarkItem = ({ url, title, version, onRemove }: Props) => {
  const onCopy = useCopyUrl();

  const onEnter = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    const link = url.indexOf('https://') === 0 ? url : `https://${url}`;

    window.open(link, '_blank');
  }, []);

  const onCopyUrl = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    onCopy(url);
  }, []);

  return (
    <S.BookmarkWrapper onClick={onEnter}>
      <S.BookmarkItem>
        <Avatar src={`${FAVICON_IMAGE}${url}&sz=256`} size={40} />
        <Text weight={400} size={16}>
          {title}
        </Text>
      </S.BookmarkItem>
      {version === 'watch' && (
        <S.IconWrapper onClick={onCopyUrl}>
          <Icon name="clip" size={18} />
        </S.IconWrapper>
      )}
      {version === 'update' && (
        <S.UpdateContainer>
          <S.IconWrapper onClick={(e) => onRemove(e, url)}>
            <Icon name="delete" size={20} />
          </S.IconWrapper>
        </S.UpdateContainer>
      )}
    </S.BookmarkWrapper>
  );
};

export default BookmarkItem;
