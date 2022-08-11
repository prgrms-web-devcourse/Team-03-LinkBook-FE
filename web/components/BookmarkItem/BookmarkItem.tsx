import { FAVICON_IMAGE } from '../../shared/common';
import { Icon, Avatar, Text } from '..';
import * as S from './BookmarkItem.style';
import { useCallback } from 'react';
import useCopyUrl from '../../hooks/useCopyUrl';

interface Props {
  url: string;
  title: string;
  version: 'watch' | 'update';
}

const BookmarkItem = ({ url, title, version }: Props) => {
  const onCopy = useCopyUrl();

  const onEnter = useCallback((event: React.MouseEvent) => {
    event.preventDefault();

    window.open(url, '_blank');
  }, []);

  const onCopyUrl = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    onCopy(url);
  }, []);

  // bookmark 수정 modal이 구현후 수정예정
  const onUpdate = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    console.log(event);
  };

  // api로 삭제하는 이벤트라 나중에 구현하겠습니다.
  const onDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    console.log(event);
  };
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
          <S.IconWrapper onClick={onUpdate}>
            <Icon name="pencil" size={18} />
          </S.IconWrapper>
          <S.Line>┃</S.Line>
          <S.IconWrapper onClick={onDelete}>
            <Icon name="delete" size={18} />
          </S.IconWrapper>
        </S.UpdateContainer>
      )}
    </S.BookmarkWrapper>
  );
};

export default BookmarkItem;
