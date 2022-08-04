import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from '../../styles/themes';
import { Avatar, Icon, Text, Tag } from '../index';
import CardBack from './CardBack/CardBack';
import * as S from './Card.style';
import { Folder } from '../../shared/DummyDataType';

interface Props {
  data: Folder;
  version?: string;
  shrinking?: boolean;
  isPinned?: boolean;
}

const defaultProps = {
  data: {},
  version: 'default',
  shrinking: true,
  isPinned: false,
};

const Card = ({ data, version, shrinking, isPinned, ...styles }: Props) => {
  const author = 'Miral'; // 나중에 수정
  const authorImage =
    'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'; // 나중에 수정

  const router = useRouter();
  const [reverseCard, setReverseCard] = useState(false);

  const handleRotateCard = () => {
    setReverseCard(!reverseCard);
  };

  const moveFolderDetailPage = () => {
    router.push(`/folderdetail/${data.id}`);
  };

  return (
    <S.Container>
      <S.Card version={version} reverseCard={reverseCard} {...styles}>
        <S.ContentContainer
          onClick={
            version === 'default' ? handleRotateCard : moveFolderDetailPage
          }
        >
          <S.ImageWrapper version={version}>
            <Image
              className="image"
              width="300px"
              height={206}
              src={data.image}
              layout="responsive"
            />
          </S.ImageWrapper>
          <S.Content version={version}>
            {isPinned && (
              <S.IconWrapper>
                <Icon name="pin_blue_ic" size={25} />
              </S.IconWrapper>
            )}
            {version === 'myCard' && (
              <S.StatusWrapper>
                <S.StatusText>Public</S.StatusText>
              </S.StatusWrapper>
            )}
            <S.TitleWrapper>
              <S.Title>{data.title}</S.Title>
            </S.TitleWrapper>
            <S.TagWrapper>
              <Tag tagItems={data.tags!} shrinking={shrinking} />
            </S.TagWrapper>
            <S.Info version={version}>
              <Avatar name={author} src={authorImage} />
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
