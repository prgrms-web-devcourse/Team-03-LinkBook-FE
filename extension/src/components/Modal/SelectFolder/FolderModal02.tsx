import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Button from "../../Button";

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
  cursor: pointer;
`;

const SelectRangeWrapper = styled.div`
  padding: 7px;
  overflow: scroll;
  border: 1px solid #e0e0e0;
  position: relative;
  border-top: 0;
  border-radius: 5px;
`;

const SelectRange = styled.div`
  padding: 6px 9px;
  font-size: 11px;
  line-height: 11px;
  color: #4f4f4f;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const MakeFolderButton = styled(Button)`
  background-color: #4285f4;
  padding: 9.5px 31px;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  border-radius: 56px;
  cursor: pointer;
`;

interface Props {
  handleMakeFolder: (id: number, title: string) => void;
}

const FolderModal02 = ({ handleMakeFolder }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectRangeOn, setSelectRangeOn] = useState<boolean>();
  const [selectRangeText, setSelectRangeText] = useState("🔒 공개 범위 선택 ▼");
  const onMakeFolderBtnClick = () => {
    if (!inputRef.current!.value) return alert("폴더이름을 작성해주세요");
    if (selectRangeOn === undefined) return alert("공개 범위를 선택해주세요");
    //api
    //폴더 생성
    //title,image,isPinned,isPrivate,tags:[],bookmarks:[]
    //response folder Id
    if (inputRef.current && inputRef.current.value !== "") {
      handleMakeFolder(1, inputRef.current.value);
    }
  };

  return (
    <Container>
      <FolderTitleInput ref={inputRef} placeholder="북마크이름" />
      <SelectPrivateText onClick={() => setSelectRangeOn((prev) => !prev)}>
        {selectRangeText}
      </SelectPrivateText>
      {selectRangeOn && (
        <SelectRangeWrapper onClick={() => setSelectRangeOn(false)}>
          <SelectRange onClick={() => setSelectRangeText("나만보기")}>
            나만보기
          </SelectRange>
          <SelectRange onClick={() => setSelectRangeText("전체공개")}>
            전체공개
          </SelectRange>
        </SelectRangeWrapper>
      )}
      <MakeFolderButton onClick={onMakeFolderBtnClick}>
        폴더 만들기
      </MakeFolderButton>
    </Container>
  );
};

export default FolderModal02;
