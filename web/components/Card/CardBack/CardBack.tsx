import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Avatar, Icon, Text } from '../../index';
import * as S from './CardBack.style';
import { Bookmark } from '../../../shared/DummyDataType';

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
  const image =
    'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';
  return (
    <S.Card reverseCard={reverseCard} {...styles}>
      <S.IconWrapper onClick={handleRotateCard}>
        <Icon name="back" size={20} />
      </S.IconWrapper>
      <S.BookmarkList reverseCard={reverseCard}>
        {data.map((bookmark) => (
          <Link href={bookmark.url} passHref key={bookmark.id}>
            <S.Bookmark>
              {/* 북마크 리스트 아이템 머지되면 수정 */}
              <Avatar src={image} size={31} />
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
