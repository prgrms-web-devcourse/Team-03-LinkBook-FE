import * as S from './ContentSection.style';
import { Profile, BookmarkList, Tag } from '../../../../components';
import Image from 'next/image';
import { SpecificFolder } from '../../../../types';
import PrivateSection from '../PrivateSection';
import HandleFolderSection from '../HandleFolderSection';

interface Props {
  id?: number;
  data?: SpecificFolder;
}

const ContentSection = ({ id, data }: Props) => {
  const {
    title,
    image,
    content,
    isPinned,
    isPrivate,
    likes,
    bookmarks,
    user,
    tags,
    createdAt,
  } = data;
  const tempToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjYwMDY4NTMzLCJpYXQiOjE2NjAwNjQ5MzMsImVtYWlsIjoiOTAzeWhAbmF2ZXIuY29tIn0.Kxug26ko-HOnmPVHgY4PW2CMc4u7QTPyiQCZ93u8IaUeR5CxmA_Jk6MkVjImM-eSYFvDlIUi6WW1VfMP3UoSHg';

  return (
    <S.Container>
      <S.TitleContainer>
        {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
        {id === 7 && (
          <PrivateSection
            id={id}
            isPrivate={isPrivate}
            isPinned={isPinned}
            token={tempToken}
          />
        )}
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <S.ProfileContainer>
          <Profile iconSize={35} user={user} version="author" />
          <S.Date>{createdAt.slice(0, 10)}</S.Date>
        </S.ProfileContainer>
        <S.TagWrapper>
          <Tag tagItems={tags} shrinking />
        </S.TagWrapper>
        <S.ImageWrapper>
          <Image
            src={image}
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
          />
        </S.ImageWrapper>
        <S.Description>{content}</S.Description>
      </S.TitleContainer>
      <S.BookmarksContainer>
        <S.SubTitle>북마크 모음</S.SubTitle>
        <BookmarkList bookmarkItems={bookmarks} version="watch" />
      </S.BookmarksContainer>
      <S.ProfileWrapper>
        <Profile user={user} />
      </S.ProfileWrapper>
      <HandleFolderSection id={id} likes={likes} token={tempToken} />
    </S.Container>
  );
};

export default ContentSection;
