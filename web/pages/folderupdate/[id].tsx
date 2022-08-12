import * as S from '../../styles/pageStyles/folderUpdate.style';
import {
  ImageUpload,
  CommentInput,
  BookmarkList,
  Button,
  Icon,
} from '../../components';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Switch,
  BookmarkInput,
} from '../../pageComponents/folderupdateComponents/components';
import { getFolder, updateFolder } from '../../apis/FolderAPI';
import { TEMP_TOKEN } from '../../constants/alert.constants';

const FolderUpdate = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const titleInput = useRef<HTMLInputElement>();
  // const [tags, setTags] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const contentInput = useRef<HTMLTextAreaElement>();
  const [bookmarks, setBookmarks] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const moveUserPage = () => {
    router.push(`/user/1`); // 추후 전역에서 사용하는 user id 붙이기
  };

  const changePin = () => {
    setIsPinned(!isPinned);
  };

  const moveFolderDetailPage = async () => {
    const title = titleInput.current.value;
    const content = contentInput.current.value;
    console.log(title, imageSrc, content, isPinned, isPrivate, bookmarks);

    await updateFolder(
      {
        id: Number(id),
        title,
        image: imageSrc,
        content,
        isPinned,
        isPrivate,
        tags: [],
        bookmarks,
      },
      TEMP_TOKEN,
    );
    router.push(`/folderdetail/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { isPrivate, title, image, content, bookmarks } = await getFolder(
        Number(id),
      );
      setIsPrivate(isPrivate);
      titleInput.current.value = title;
      // setTags(folder.tags)
      setImageSrc(image);
      contentInput.current.value = content;
      setBookmarks(bookmarks);
    };
    fetchData();
  }, []);

  return (
    <>
      <S.ContentContainer>
        <S.SwitchContainer>
          <Switch isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
          <S.IconWrapper onClick={changePin}>
            <Icon name={isPinned ? 'pin_blue_ic' : 'ico_pin'} size={30} />
          </S.IconWrapper>
        </S.SwitchContainer>
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
