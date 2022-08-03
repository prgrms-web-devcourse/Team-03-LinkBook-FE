import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  BookmarkList,
  CommentInput,
  Icon,
  Profile,
  Tag,
} from '../../components';
import { specificFolder } from '../../shared/DummyData';
import { CommentList } from './components';
import * as S from './folderDetail.style';

const folderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    title,
    image,
    content,
    isPinned,
    isPrivate,
    likes,
    comments,
    bookmarks,
    user,
    tags,
  } = specificFolder;

  return (
    <S.Container>
      <S.ContentContainer>
        <S.TitleContainer>
          {/* 추후에 글 작성자인지 확인하는 로직으로 변경 예정 */}
          {id === String(user.id) && (
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
            <S.Date>2022-07-21</S.Date>
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
        <S.Line />
      </S.ContentContainer>
      {!isPrivate && (
        <S.CommentContainer>
          <S.CommentTitle>{comments.length}개의 댓글</S.CommentTitle>
          <CommentInput />
          <CommentList comments={comments} />
        </S.CommentContainer>
      )}
    </S.Container>
  );
};

export default folderDetailPage;
