import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { createFolder } from '../../../../apis/FolderAPI';
import { Modal, Toast } from '../../../../components';
import { PAGE_URL } from '../../../../constants/url.constants';
import { showModalStatus } from '../../../../recoil/showModal';
import { userInfo } from '../../../../recoil/user';
import { RoundButton } from '../index';
import {
  SpecificFolder,
  CreateOrUpdateFolder,
  ScrapOriginFolder,
} from '../../../../types';
import {
  closeModal,
  showLoginModal,
  showScrapModal,
} from '../../../../constants/modal.constants';

interface Props {
  id: number;
  token: string;
  data: SpecificFolder;
}

const ScrapButtonSection = ({ id, token, data }: Props) => {
  const showModal = useRecoilValue(showModalStatus);
  const router = useRouter();
  const setShowModalStatus = useSetRecoilState(showModalStatus);
  const { user }: any = useRecoilValue(userInfo);
  const [originFolder, setOriginFolder] = useState<ScrapOriginFolder>(null);

  const handleClickScrap = async () => {
    if (!user) {
      Toast.show('로그인 후 가능합니다.');
      setShowModalStatus(showLoginModal);
      return;
    }

    setShowModalStatus(showScrapModal);
  };

  const handleScrapFolder = async ({
    title,
    isPrivate,
    isPinned,
  }: ScrapOriginFolder) => {
    const { image, content, tags, bookmarks } = data;
    const updatedFolderData: CreateOrUpdateFolder = {
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
      const res = await createFolder(updatedFolderData, token);
      setShowModalStatus(closeModal);
      await router.push(`${PAGE_URL.DETAIL}/${res.id}`);
    } catch (error) {
      console.log(error);
      Toast.show('문제가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (!data) return;

    setOriginFolder({
      title: data.title,
      isPrivate: data.isPrivate,
      isPinned: data.isPinned,
    });
  }, [data]);

  return (
    <>
      <Modal
        version="scrap"
        show={showModal.Scrap}
        originFolder={originFolder}
        setScrapFolder={handleScrapFolder}
      />
      <RoundButton
        iconName="copy_white"
        description="스크랩"
        onClick={handleClickScrap}
      />
    </>
  );
};

export default ScrapButtonSection;
