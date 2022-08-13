import React, { useEffect, useState } from "react";
import {
  IUserContext,
  useUserContext,
} from "../../../contexts/ContextProvider";
import { getFolderList } from "../../../utils/api";
import { Folder } from "../../../utils/types";
import * as S from "./SelectFolderModal.style";

interface Props {
  handleSelectFolder: (id: number, title: string) => void;
  handleAddFolder?: () => void;
}

const SelectFolderModal = ({ handleSelectFolder, handleAddFolder }: Props) => {
  const onFolderClick = (id: number, title: string) => {
    handleSelectFolder(id, title);
  };

  const [folderList, setFolderList] = useState<Folder[]>([]);
  const { userInfo } = useUserContext() as IUserContext;
  useEffect(() => {
    (async function () {
      setFolderList(await getFolderList(userInfo.id));
    })();
  }, [userInfo.id]);

  return (
    <S.Container>
      <S.FolderInputBox>
        <S.InputText>북마크 폴더 선택</S.InputText>
        <S.InputIcon>▼</S.InputIcon>
      </S.FolderInputBox>
      <S.FolderListBox>
        {folderList &&
          folderList.map((item) => (
            <S.Folder
              onClick={() => onFolderClick(item.id, item.title)}
              key={item.id}
            >
              {item.title}
            </S.Folder>
          ))}
      </S.FolderListBox>
      <S.AddFolderText onClick={handleAddFolder}>
        북마크 폴더 만들기 +
      </S.AddFolderText>
    </S.Container>
  );
};

export default SelectFolderModal;
