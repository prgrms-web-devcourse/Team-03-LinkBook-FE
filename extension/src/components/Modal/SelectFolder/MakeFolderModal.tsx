import React, { useRef, useState } from "react";
import { createFolder } from "../../../utils/api";
import { CreateFolderRes } from "../../../utils/types";
import * as S from "./MakeFolderModal.style";

interface Props {
  handleMakeFolder: (id: number, title: string) => void;
}

const MakeFolderModal = ({ handleMakeFolder }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectRangeOn, setSelectRangeOn] = useState<boolean>();
  const [selectRangeText, setSelectRangeText] = useState("🔒 공개 범위 선택 ▼");

  const onMakeFolderBtnClick = async () => {
    if (!inputRef.current!.value) return alert("폴더이름을 작성해주세요");
    if (selectRangeOn === undefined) return alert("공개 범위를 선택해주세요");

    const resFolderId: CreateFolderRes = await createFolder({
      title: inputRef.current?.value as string,
      isPrivate,
    });
    if (inputRef.current && inputRef.current.value !== "") {
      handleMakeFolder(resFolderId.id, inputRef.current.value);
    }
  };

  return (
    <S.Container>
      <S.FolderTitleInput ref={inputRef} placeholder="폴더 이름" />
      <S.SelectPrivateText onClick={() => setSelectRangeOn((prev) => !prev)}>
        {selectRangeText}
      </S.SelectPrivateText>
      {selectRangeOn && (
        <S.SelectRangeWrapper onClick={() => setSelectRangeOn(false)}>
          <S.SelectRange
            onClick={() => {
              setSelectRangeText("나만보기");
              setIsPrivate(true);
            }}
          >
            나만보기
          </S.SelectRange>
          <S.SelectRange
            onClick={() => {
              setSelectRangeText("전체공개");
              setIsPrivate(false);
            }}
          >
            전체공개
          </S.SelectRange>
        </S.SelectRangeWrapper>
      )}
      <S.MakeFolderButton onClick={onMakeFolderBtnClick}>
        폴더 만들기
      </S.MakeFolderButton>
    </S.Container>
  );
};

export default MakeFolderModal;
