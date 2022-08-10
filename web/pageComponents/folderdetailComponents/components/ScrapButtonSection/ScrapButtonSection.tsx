import { useRouter } from 'next/router';
import { createFolder } from '../../../../apis/FolderAPI';
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

  const handleClickScrap = async () => {
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
      await router.push(`/folderdetail/${res.id}`);
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
