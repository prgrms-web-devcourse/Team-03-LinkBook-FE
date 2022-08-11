import * as S from './ContentSection.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import {
  TEMP_TOKEN,
  TEMP_USER_ID,
} from '../../../../constants/alert.constants';

interface Props {
  id?: number;
}

const ContentSection = ({ id }: Props) => {
  // like 로직은 임의로 구현
  const [data, setData] = useState<SpecificFolder>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        // token이 있다고 가정하고 테스트 진행
        const contentRes = await getFolder(id, TEMP_TOKEN);
        setData(contentRes);
      } catch (error) {
        console.log(error);
        router.push(PAGE_URL.ERROR);
      }
    })();
  }, [id]);

  return (
    <>
      {data ? (
        <S.Container>
          <S.TitleContainer>
            {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
            {data.user.id === TEMP_USER_ID && (
              <PrivateSection
                id={id}
                isPrivate={data.isPrivate}
                isPinned={data.isPinned}
                token={TEMP_TOKEN}
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
              token={TEMP_TOKEN}
              likeId={5}
            />
            <ScrapButtonSection id={id} data={data} token={TEMP_TOKEN} />
          </S.ButtonsContainer>
        </S.Container>
      ) : (
        <PlaceholderSection />
      )}
    </>
  );
};

export default ContentSection;
