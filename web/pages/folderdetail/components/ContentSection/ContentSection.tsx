import { specificFolder } from '../../../../shared/DummyData';
import * as S from './ContentSection.style';
import { Icon, Profile, BookmarkList, Tag } from '../../../../components';
import Image from 'next/image';

interface Props {
  params?: string | string[];
}

const ContentSection = ({ params }: Props) => {
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
  } = specificFolder;
  return (
    <S.Container>
      <S.TitleContainer>
        {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
        {params === String(user.id) && (
          <S.MyContainer>
            <S.MyButtonsContainer>
              <S.PublicTag>{isPrivate ? 'Private' : 'Public'}</S.PublicTag>
              {isPinned && (
                <S.PublicTag>
                  <Icon name="ico_pin" size={20} />
                </S.PublicTag>
              )}
            </S.MyButtonsContainer>
            <S.MyButtonsContainer>
              <S.ButtonUpdateDelete>수정</S.ButtonUpdateDelete>|
              <S.ButtonUpdateDelete>삭제</S.ButtonUpdateDelete>
            </S.MyButtonsContainer>
          </S.MyContainer>
        )}
        <S.Title>{title}</S.Title>
        <S.ProfileItems>
          <Profile iconSize={35} user={user} version="author" />
          <S.Date>{createdAt}</S.Date>
        </S.ProfileItems>
        <S.TagItems>
          <Tag tagItems={tags} shrinking />
        </S.TagItems>
        <S.ImageContainer>
          <Image
            src={image}
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
          />
        </S.ImageContainer>
        <S.Description>{content}</S.Description>
      </S.TitleContainer>
      <S.BookmarksContainer>
        <S.SubTitle>북마크 모음</S.SubTitle>
        <BookmarkList bookmarkItems={bookmarks} version="watch" />
      </S.BookmarksContainer>
      <S.ProfileContainer>
        <Profile user={user} />
      </S.ProfileContainer>
      <S.ButtonsContainer>
        <S.ButtonContainer>
          <S.NotClickedButton>
            <Icon name="likes_clicked_white" size={25} />
          </S.NotClickedButton>
          <S.ButtonDescription>{likes}</S.ButtonDescription>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.NotClickedButton>
            <Icon name="copy_white" size={25} />
          </S.NotClickedButton>
          <S.ButtonDescription>스크랩</S.ButtonDescription>
        </S.ButtonContainer>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default ContentSection;
