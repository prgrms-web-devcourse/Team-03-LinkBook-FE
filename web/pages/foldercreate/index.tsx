import * as S from '../../styles/pageStyles/folderUpdate.style';
import {
  ImageUpload,
  CommentInput,
  BookmarkList,
  Button,
  Icon,
  TagSelector,
} from '../../components';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Switch,
  BookmarkInput,
} from '../../pageComponents/folderupdateComponents/components';
import { createFolder } from '../../apis/FolderAPI';
import { FOLDER_DEFAULT_IMAGE } from '../../constants/image.constants';
import { getCookie } from '../../util/cookies';
import { PAGE_URL } from '../../constants/url.constants';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';

const FolderCreate = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const titleInput = useRef<HTMLInputElement>();
  const [tags, setTags] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const contentInput = useRef<HTMLTextAreaElement>();
  const [bookmarks, setBookmarks] = useState([]);

  const router = useRouter();
  const token = getCookie('ACCESS_TOKEN');
  const loginUser: any = useRecoilValue(userInfo);

  const moveUserPage = () => {
    router.push(`${PAGE_URL.USER}/${loginUser.user.id}`);
  };

  const changePin = () => {
    setIsPinned(!isPinned);
  };

  const createFolderAPI = async () => {
    const title = titleInput.current.value;
    const content = contentInput.current.value;
    const image = imageSrc || FOLDER_DEFAULT_IMAGE;

    const { id } = await createFolder(
      {
        title,
        image,
        content,
        isPinned,
        isPrivate,
        tags,
        bookmarks,
      },
      token,
    );

    return id;
  };

  const moveFolderDetailPage = async () => {
    const id = await createFolderAPI();

    router.push(`${PAGE_URL.DETAIL}/${id}`);
  };

  return (
    <>
      <S.ContentContainer>
        <S.SwitchContainer>
          <Switch isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
          <S.IconWrapper onClick={changePin}>
            <Icon name={isPinned ? 'pin_blue_ic' : 'ico_pin'} size={30} />
          </S.IconWrapper>
        </S.SwitchContainer>
        <TagSelector selectedTag={tags} setSelectedTag={setTags} />
        <S.TitleInput
          type="text"
          maxLength={20}
          placeholder="제목을 입력해 주세요"
          ref={titleInput}
        />
        <ImageUpload
          version="page"
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
        />
        <CommentInput ref={contentInput} version="update" />
        <BookmarkList
          version="update"
          bookmarkItems={bookmarks}
          setBookmarks={setBookmarks}
        />
        <BookmarkInput bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </S.ContentContainer>
      <S.ButtonWrapper>
        <Button type="button" version="mainLight" onClick={moveUserPage}>
          작성 취소
        </Button>
        <Button type="submit" onClick={moveFolderDetailPage}>
          폴더 등록
        </Button>
      </S.ButtonWrapper>
    </>
  );
};

export default FolderCreate;
