import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from '../../styles/themes';
import { Avatar, Icon, Text, Tag } from '../index';
import CardBack from './CardBack/CardBack';
import * as S from './Card.style';
import { Folder } from '../../shared/DummyDataType';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';

interface Props {
  data: Folder;
  version?: string;
  shrinking?: boolean;
}

const defaultProps = {
  data: {},
  version: 'default',
  shrinking: true,
};

const Card = ({ data, version, shrinking, ...styles }: Props) => {
  const author = data.user.name;
  const authorImage = data.user.image;
  const { isPinned } = data;
  const router = useRouter();
  const [reverseCard, setReverseCard] = useState(false);
  const { bookmarks } = data;
  const getUserInfo: any = useRecoilValue(userInfo);
  const loginUserId = getUserInfo?.user?.id;

  const handleRotateCard = () => {
    setReverseCard(!reverseCard);
  };

  const moveFolderDetailPage = () => {
    router.push(`/folderdetail/${data.id}`);
  };

  const pinIcon = () => {
    const path = router.pathname.split('/')[1];
    if (isPinned && path === 'user') {
      const id = parseInt(router.query.id.toString());
      if (id === loginUserId) {
        return (
          <S.IconWrapper>
            <Icon name="pin_blue_ic" size={25} />
          </S.IconWrapper>
        );
      }
    }
  };
  return (
    <S.Container>
      <S.Card version={version} reverseCard={reverseCard} {...styles}>
        <S.ContentContainer onClick={moveFolderDetailPage}>
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
            {pinIcon()}
            {/* {isPinned && (
              <S.IconWrapper>
                <Icon name="pin_blue_ic" size={25} />
              </S.IconWrapper>
            )} */}
            {version === 'myCard' && (
              <S.StatusWrapper>
                {data.isPrivate ? (
                  <S.StatusText isPrivate={true}>Private</S.StatusText>
                ) : (
                  <S.StatusText>Public</S.StatusText>
                )}
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
              <S.InfoRight>
                <Text size={theme.fontSize.c[1]}>
                  {data.createdAt.split('T')[0]}
                </Text>
                {version === 'othersCard' && (
                  <S.Likes>
                    <Icon name="likesFill" size={16} />
                    <Text size={theme.fontSize.c[1]}>{data.likes}</Text>
                  </S.Likes>
                )}
              </S.InfoRight>
            </S.Info>
          </S.Content>
        </S.ContentContainer>
        {version === 'default' && (
          <S.ButtonWrapper onClick={handleRotateCard}>
            <S.StyledLink>북마크 확인하기 ▶</S.StyledLink>
          </S.ButtonWrapper>
        )}
      </S.Card>
      {version === 'default' && (
        <CardBack
          data={bookmarks}
          handleRotateCard={handleRotateCard}
          reverseCard={reverseCard}
        />
      )}
    </S.Container>
  );
};

Card.defaultProps = defaultProps;

export default Card;
