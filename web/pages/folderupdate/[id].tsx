import * as S from '../../styles/pageStyles/folderUpdate.style';
import {
  ImageUpload,
  CommentInput,
  BookmarkList,
  Button,
  Icon,
  TagSelector,
} from '../../components';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Switch,
  BookmarkInput,
} from '../../pageComponents/folderupdateComponents/components';
import { getFolder, updateFolder } from '../../apis/FolderAPI';
import { SpecificFolder } from '../../types';
import { PAGE_URL } from '../../constants/url.constants';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';

interface Props {
  token: string;
}

const FolderUpdate = ({ token }: Props) => {
  const [isPrivate, setIsPrivate] = useState(false);
  const titleInput = useRef<HTMLInputElement>();
  const [tags, setTags] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const contentInput = useRef<HTMLTextAreaElement>();
  const [bookmarks, setBookmarks] = useState([]);
  const loginUser: any = useRecoilValue(userInfo);

  const router = useRouter();
  const { id } = router.query;

  const moveUserPage = () => {
    router.push(`/user/${loginUser.user.id}`);
  };

  const changePin = () => {
    setIsPinned(!isPinned);
  };

  const moveFolderDetailPage = async () => {
    const title = titleInput.current.value;
    const content = contentInput.current.value;

    await updateFolder(
      {
        id: Number(id),
        title,
        image: imageSrc,
        content,
        isPinned,
        isPrivate,
        tags,
        bookmarks,
      },
      token,
    );
    router.push(`${PAGE_URL.DETAIL}/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { isPrivate, title, image, content, bookmarks } = await getFolder(
        Number(id),
      );
      setIsPrivate(isPrivate);
      titleInput.current.value = title;
      setTags(tags);
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
