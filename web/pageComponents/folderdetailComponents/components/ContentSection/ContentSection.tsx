import * as S from './ContentSection.style';
import { useEffect, useState } from 'react';
import { Profile, BookmarkList, Tag } from '../../../../components';
import Image from 'next/image';
import { SpecificFolder } from '../../../../types';
import PrivateSection from '../PrivateSection';
import HandleFolderSection from '../HandleFolderSection';
import { getFolder } from '../../../../apis/FolderAPI';
import { useRouter } from 'next/router';
import { TEMP_TOKEN } from '../../../../constants/alert.constants';

interface Props {
  id?: number;
}

const ContentSection = ({ id }: Props) => {
  const [data, setData] = useState<SpecificFolder>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const contentRes = await getFolder(id);
        setData(contentRes);
      } catch (error) {
        console.log(error);
        router.push('/404');
      }
    })();
  }, []);

  return (
    <>
      {data && (
        <S.Container>
          <S.TitleContainer>
            {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
            {id === 7 && (
              <PrivateSection
                id={id}
                isPrivate={data.isPrivate}
                isPinned={data.isPinned}
                token={TEMP_TOKEN}
              />
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
          <HandleFolderSection id={id} likes={data.likes} token={TEMP_TOKEN} />
        </S.Container>
      )}
    </>
  );
};

export default ContentSection;
