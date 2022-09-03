import * as S from '../../styles/pageStyles/folderUpdate.style';
import {
  ImageUpload,
  CommentInput,
  BookmarkList,
  Button,
  Icon,
  TagSelector,
  Seo,
  Toast,
} from '../../components';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Switch,
  BookmarkInput,
} from '../../pageComponents/folderupdateComponents/components';
import { getFolder, updateFolder } from '../../apis/FolderAPI';
import { PAGE_URL } from '../../constants/url.constants';
import { FOLDER_DEFAULT_IMAGE } from '../../constants/image.constants';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';
import { getCookie } from '../../util/cookies';

const FolderUpdate = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const titleInput = useRef<HTMLInputElement>();
  const [tags, setTags] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const contentInput = useRef<HTMLTextAreaElement>();
  const [bookmarks, setBookmarks] = useState([]);
  const loginUser: any = useRecoilValue(userInfo);
  const loginUserId = loginUser?.user?.id;
  const token = getCookie('ACCESS_TOKEN');
  const router = useRouter();
  const { id } = router.query;

  const moveUserPage = () => {
    router.push(`${PAGE_URL.USER}/${loginUserId}`);
  };

  const changePin = () => {
    setIsPinned(!isPinned);
  };

  const updateFolderAPI = async () => {
    const title = titleInput.current.value || '제목없음';
    const content = contentInput.current.value;
    const image = imageSrc || FOLDER_DEFAULT_IMAGE;
    if (bookmarks.length === 0) {
      Toast.show('북마크를 추가해주세요');
      return false;
    } else {
      await updateFolder(
        {
          id: Number(id),
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
      return true;
    }
  };

  const moveFolderDetailPage = async () => {
    const res = await updateFolderAPI();
    if (res) router.push(`${PAGE_URL.DETAIL}/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { isPrivate, title, image, content, bookmarks, isPinned, user } =
          await getFolder(Number(id));
        if (user.id !== loginUserId) {
          router.push(`${PAGE_URL.ERROR}`);
          return;
        }
        setIsPrivate(isPrivate);
        setIsPinned(isPinned);
        titleInput.current.value = title;
        setTags(tags);
        setImageSrc(image);
        contentInput.current.value = content;
        setBookmarks(bookmarks);
      } catch (e) {
        router.push(`${PAGE_URL.ERROR}`);
        return;
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <S.ContentContainer>
        <Seo title="폴더 수정페이지 | 링북" />
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

export default FolderUpdate;
