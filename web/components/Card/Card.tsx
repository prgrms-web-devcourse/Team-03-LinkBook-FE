import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from '../../styles/themes';
import { Avatar, Icon, Text, Tag } from '../index';
import CardBack from './CardBack/CardBack';
import * as S from './Card.style';

interface Tags {
  id: string;
  text: string;
}
interface User {
  image: string;
  name: string;
}
interface BookMarks {
  id: number;
  image: string;
  title: string;
  url: string;
}

interface Data {
  id: number;
  image: string;
  title: string;
  tags: Tags[];
  user: User;
  createdAt: string;
  likes: number;
  bookmarks: BookMarks[];
}

interface Props {
  data: Data;
  version?: string;
}

const defaultProps = {
  data: {},
  version: 'default',
};

const Card = ({ data, version, ...styles }: Props) => {
  const router = useRouter();
  const [reverseCard, setReverseCard] = useState(false);

  const handleRotateCard = () => {
    setReverseCard(!reverseCard);
  };

  const moveFolderDetailPage = () => {
    router.push(`/detail/${data.id}`);
  };

  return (
    <S.Container>
      <S.Card version={version} reverseCard={reverseCard} {...styles}>
        <S.ContentContainer
          onClick={
            version === 'default' ? handleRotateCard : moveFolderDetailPage
          }
        >
          <S.ImageWrapper>
            <Image
              width="300px"
              height={206}
              src={data.image}
              layout="responsive"
            />
          </S.ImageWrapper>
          <S.Content version={version}>
            <S.TitleWrapper>
              <S.Title>{data.title}</S.Title>
            </S.TitleWrapper>
            <S.TagWrapper>
              <Tag tagItems={data.tags} />
            </S.TagWrapper>
            <S.Info version={version}>
              <Avatar name={data.user.name} src={data.user.image} />
              <div>
                <Text size={theme.fontSize.c[1]}>{data.createdAt}</Text>
                {version === 'othersCard' && (
                  <S.Likes>
                    <Icon name="likesFill" size={16} />
                    <Text size={theme.fontSize.c[1]}>{data.likes}</Text>
                  </S.Likes>
                )}
              </div>
            </S.Info>
          </S.Content>
        </S.ContentContainer>
        {version === 'default' && (
          <S.LinkWrapper>
            <Link href="/">
              <S.StyledLink>북마크 확인하기 ▶</S.StyledLink>
            </Link>
          </S.LinkWrapper>
        )}
      </S.Card>
      {version === 'default' && (
        <CardBack
          data={data.bookmarks}
          handleRotateCard={handleRotateCard}
          reverseCard={reverseCard}
        />
      )}
    </S.Container>
  );
};

Card.defaultProps = defaultProps;

export default Card;
