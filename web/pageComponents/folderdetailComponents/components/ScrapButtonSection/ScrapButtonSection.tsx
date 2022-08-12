import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { createFolder } from '../../../../apis/FolderAPI';
import { showLoginModal } from '../../../../constants/modal.constants';
import { PAGE_URL } from '../../../../constants/url.constants';
import { showModalStatus } from '../../../../recoil/showModal';
import { userInfo } from '../../../../recoil/user';
import { SpecificFolder } from '../../../../types';
import { CreateOrUpdateFolder } from '../../../../types/folder';
import { RoundButton } from '../index';

interface Props {
  id: number;
  token: string;
  data: SpecificFolder;
}

const ScrapButtonSection = ({ id, token, data }: Props) => {
  const router = useRouter();
  const setShowModalStatus = useSetRecoilState(showModalStatus);
  const { user }: any = useRecoilValue(userInfo);

  const handleClickScrap = async () => {
    if (!user) {
      alert('로그인 후 가능합니다.');
      setShowModalStatus(showLoginModal);
      return;
    }

    const { title, image, content, isPinned, isPrivate, tags, bookmarks } =
      data;
    const folderData: CreateOrUpdateFolder = {
      title,
      image,
      content,
      isPinned,
      isPrivate,
      tags,
      bookmarks,
      originId: id,
    };
    try {
      const res = await createFolder(folderData, token);
      await router.push(`${PAGE_URL.DETAIL}/${res.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoundButton
      iconName="copy_white"
      description="스크랩"
      onClick={handleClickScrap}
    />
  );
};

export default ScrapButtonSection;
