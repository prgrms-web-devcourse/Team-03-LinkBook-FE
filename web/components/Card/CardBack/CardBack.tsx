import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Avatar, Icon, Text } from '../../index';
import * as S from './CardBack.style';
import { Bookmark } from '../../../shared/DummyDataType';
import { FAVICON_IMAGE } from '../../../shared/common';

interface Props {
  data: Bookmark[];
  handleRotateCard: MouseEventHandler;
  reverseCard: boolean;
}

const CardBack = ({
  data,
  handleRotateCard,
  reverseCard,
  ...styles
}: Props) => {
  return (
    <S.Card reverseCard={reverseCard} {...styles}>
      <S.IconWrapper onClick={handleRotateCard}>
        <Icon name="back" size={20} />
      </S.IconWrapper>
      <S.BookmarkList reverseCard={reverseCard}>
        {data &&
          data.map((bookmark) => (
            <Link
              target="_blank"
              href={bookmark.url}
              passHref
              key={bookmark.id}
            >
              <S.Bookmark>
                <Avatar
                  src={`${FAVICON_IMAGE}${bookmark.url}&sz=256`}
                  size={31}
                />
                <S.TextWrapper>
                  <Text weight={600}>{bookmark.title}</Text>
                </S.TextWrapper>
              </S.Bookmark>
            </Link>
          ))}
      </S.BookmarkList>
    </S.Card>
  );
};

export default CardBack;
