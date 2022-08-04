import { Switch } from './components';
import * as S from './folderUpdate.style';
import {
  Input,
  ImageUpload,
  CommentInput,
  BookmarkList,
  Button,
  Modal,
} from '../../components';
import { useRef, useState } from 'react';
import { allFolders } from '../../shared/DummyData';

const FolderUpdate = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [content, setContent] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);

  const handleBookmark = () => {
    setShowBookmarkModal(!showBookmarkModal);
  };

  return (
    <>
      <Modal
        version="bookmark"
        show={showBookmarkModal}
        closeFunc={handleBookmark}
      />
      <S.ContentContainer>
        <Switch />
        <S.TitleInput
          type="text"
          maxLength={20}
          placeholder="제목을 입력하세요"
        />
        <ImageUpload version="page" />
        <CommentInput version="update" />
        <BookmarkList
          version="update"
          bookmarkItems={allFolders[0].bookmarks!}
        />
        <S.ButtonWrapper>
          <S.BookmarkButton onClick={handleBookmark} type="button">
            북마크 추가하기 +
          </S.BookmarkButton>
        </S.ButtonWrapper>
      </S.ContentContainer>
      <S.ButtonWrapper>
        <Button type="button" version="mainLight">
          작성 취소
        </Button>
        <Button type="submit">폴더 등록</Button>
      </S.ButtonWrapper>
    </>
  );
};

export default FolderUpdate;
