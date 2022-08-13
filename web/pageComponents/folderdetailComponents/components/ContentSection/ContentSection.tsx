import * as S from './ContentSection.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { getCookie } from '../../../../util/cookies';
import { PAGE_URL } from '../../../../constants/url.constants';
import { Profile, BookmarkList, Tag } from '../../../../components';
import { SpecificFolder } from '../../../../types';
import { getFolder } from '../../../../apis/FolderAPI';
import {
  PrivateSection,
  ScrapButtonSection,
  LikeButtonSection,
  OriginFolderSection,
  PlaceholderSection,
} from '../index';

interface Props {
  id?: number;
}

const ContentSection = ({ id }: Props) => {
  const [data, setData] = useState<SpecificFolder>(undefined);
  const [isMyFolder, setIsMyFolder] = useState<boolean>(false);
  const { user } = useRecoilValue(userInfo);
  const token = getCookie('ACCESS_TOKEN');
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const contentRes = await getFolder(id, token);
        setData(contentRes);
      } catch (error) {
        console.log(error);
        router.push(PAGE_URL.ERROR);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!data || !user) return;

    setIsMyFolder(user.id === data.user.id);
  }, [data, user]);

  return (
    <>
      {data ? (
        <S.Container>
          <S.TitleContainer>
            {isMyFolder && (
              <PrivateSection
                id={id}
                isPrivate={data.isPrivate}
                isPinned={data.isPinned}
                token={token}
              />
            )}
            {data.originFolder && (
              <OriginFolderSection originFolder={data.originFolder} />
            )}
            <S.TitleWrapper>{data.title}</S.TitleWrapper>
            <S.ProfileContainer>
              <Profile iconSize={35} user={data.user} version="author" />
              <S.Date>{data.createdAt.slice(0, 10)}</S.Date>
            </S.ProfileContainer>
            <S.TagWrapper>
              <Tag tagItems={data.tags} shrinking />
            </S.TagWrapper>
            <S.ImageWrapper>
              <Image
                src={data.image}
                width={1200}
                height={700}
                layout="responsive"
                objectFit="cover"
              />
            </S.ImageWrapper>
            <S.Description>{data.content}</S.Description>
          </S.TitleContainer>
          <S.BookmarksContainer>
            <S.SubTitle>북마크 모음</S.SubTitle>
            <BookmarkList bookmarkItems={data.bookmarks} version="watch" />
          </S.BookmarksContainer>
          <S.ProfileWrapper>
            <Profile user={data.user} />
          </S.ProfileWrapper>
          <S.ButtonsContainer>
            <LikeButtonSection
              folderId={id}
              likes={data.likes}
              token={token}
              isLiked={data.isLiked}
              disabled={isMyFolder}
            />
            {!isMyFolder && (
              <ScrapButtonSection id={id} data={data} token={token} />
            )}
          </S.ButtonsContainer>
        </S.Container>
      ) : (
        <PlaceholderSection />
      )}
    </>
  );
};

export default ContentSection;
