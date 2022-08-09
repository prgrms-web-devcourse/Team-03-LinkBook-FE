import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
`;

const FolderInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
`;

const InputText = styled.span`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 14px;
  border: none;
`;

const InputIcon = styled.span`
  color: #4285f4;
  font-size: 14px;
  font-weight: 500;
  border: none;
`;

const FolderListBox = styled.div`
  height: 160px;
  padding: 7px;
  overflow: scroll;
  border: 1px solid #e0e0e0;
  border-top: 2px solid #4f4f4f;
  position: relative;
`;

const Folder = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 6px 9px;
  font-size: 11px;
  line-height: 11px;
  color: #4f4f4f;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const AddFolderText = styled.div`
  font-weight: 500;
  line-height: 19px;
  font-size: 13px;
  color: #4285f4;
  align-self: center;
  margin-top: 4px;
  cursor: pointer;
`;

const DummyFolderList = [
  //res.folders.content
  { id: 1, title: "프론트 개발자를 위한 학습 로드맵" },
  { id: 2, title: "프로젝트 진행" },
  { id: 3, title: "어느 날 시니어 개발자가 나에게 물었다sadfasfsdafads" },
  { id: 4, title: "왜 그리 슬피 우느냐" },
  { id: 5, title: "주니어 개발자는 대답했다" },
  { id: 6, title: "마침내 에러를 해결 했습니다" },
  { id: 7, title: "시니어는 개발자는 물었다" },
  { id: 8, title: "그런데 왜 그리 슬피 우느냐" },
  { id: 9, title: "주니어 개발자는 대답했다" },
  { id: 10, title: "빌드가 안됩니다" },
];

interface Props {
  handleSelectFolder: (id: number, title: string) => void;
  handleAddFolder?: () => void;
}

const FolderModal01 = ({ handleSelectFolder, handleAddFolder }: Props) => {
  const onFolderClick = (id: number, title: string) => {
    handleSelectFolder(id, title);
  };

  return (
    <Container>
      <FolderInputBox>
        <InputText>북마크 폴더 선택</InputText>
        <InputIcon>▼</InputIcon>
      </FolderInputBox>
      <FolderListBox>
        {DummyFolderList.map((item) => (
          <Folder
            onClick={() => onFolderClick(item.id, item.title)}
            key={item.id}
          >
            {item.title}
          </Folder>
        ))}
      </FolderListBox>
      <AddFolderText onClick={handleAddFolder}>
        북마크 폴더 만들기 +
      </AddFolderText>
    </Container>
  );
};

export default FolderModal01;
