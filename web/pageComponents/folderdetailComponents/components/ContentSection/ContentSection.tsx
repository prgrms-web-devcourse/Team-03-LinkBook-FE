import * as S from './ContentSection.style';
import { Icon, Profile, BookmarkList, Tag } from '../../../../components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SpecificFolder } from '../../../../types';

interface Props {
  id?: string | string[];
  data?: SpecificFolder;
}

const ContentSection = ({ id, data }: Props) => {
  const router = useRouter();
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

  const moveFolderUpdatePage = () => {
    router.push(`/folderupdate/${id}`);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
        {id === String(user.id) && (
          <S.MyContainer>
            <S.MyButtonsContainer>
              <S.Tag>{isPrivate ? 'Private' : 'Public'}</S.Tag>
              {isPinned && (
                <S.Tag>
                  <Icon name="ico_pin" size={20} />
                </S.Tag>
              )}
            </S.MyButtonsContainer>
            <S.MyButtonsContainer>
              <S.UpdateButton onClick={moveFolderUpdatePage}>
                수정
              </S.UpdateButton>
              |<S.UpdateButton>삭제</S.UpdateButton>
            </S.MyButtonsContainer>
          </S.MyContainer>
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
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <S.NotClickedButton>
            <Icon name="likes_clicked_white" size={25} />
          </S.NotClickedButton>
          <S.ButtonDescription>{likes}</S.ButtonDescription>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.NotClickedButton>
            <Icon name="copy_white" size={25} />
          </S.NotClickedButton>
          <S.ButtonDescription>스크랩</S.ButtonDescription>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default ContentSection;
