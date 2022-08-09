import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  align-items: center;
`;

const FolderTitleInput = styled.input`
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 12px 18px;
  font-size: 11px;
  width: 100%;
  line-height: 16px;
  margin-bottom: 17px;
  margin-top: 5px;
`;

const SelectPrivateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #4285f4;
`;

const MakeFolderButton = styled.button`
  background-color: #4285f4;
  padding: 9.5px 31px;
  font-weight: 500;
  font-size: 14px;
`;

interface Props {
  handleMakeFolder: (id: number, title: string) => void;
  handelPrevPage: () => void;
}

const FolderModal02 = ({ handleMakeFolder, handelPrevPage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPrivate, setIsPrivate] = useState<boolean>();
  const onMakeFolderBtnClick = () => {
    //api
    //폴더 생성
    //title,image,isPinned,isPrivate,tags:[],bookmarks:[]
    //response folder Id
    if (inputRef.current && inputRef.current.value === "") {
      handleMakeFolder(1, inputRef.current?.value);
    }
  };

  return (
    <Container>
      <FolderTitleInput ref={inputRef} placeholder="북마크이름" />
      <SelectPrivateText>🔒 공개 범위 선택 ▼</SelectPrivateText>
      <MakeFolderButton onClick={onMakeFolderBtnClick}>
        폴더 만들기
      </MakeFolderButton>
    </Container>
  );
};

export default FolderModal02;
