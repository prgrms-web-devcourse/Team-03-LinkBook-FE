import Link from 'next/link';
import { MouseEventHandler } from 'react';
import Avatar from '../../Avatar';
import Icon from '../../Icon';
import Text from '../../Text';
import * as S from './CardBack.style';

interface Data {
  id: string;
  image: string;
  title: string;
  url: string;
}

interface Props {
  data: Data[];
  handleRotateCard: MouseEventHandler;
  reverseCard: boolean;
}

const defaultProps = {
  data: [],
};

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
      <S.BookmarkList>
        {data.map((bookmark) => (
          <Link href={bookmark.url} passHref key={bookmark.id}>
            <S.Bookmark>
              <Avatar src={bookmark.image} size={31} />
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

CardBack.defaultProps = defaultProps;

export default CardBack;
