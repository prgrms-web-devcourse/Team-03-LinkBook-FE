import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
`;

export const FolderInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
`;

export const InputText = styled.span`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 14px;
  border: none;
`;

export const InputIcon = styled.span`
  color: #4285f4;
  font-size: 14px;
  font-weight: 500;
  border: none;
`;

export const FolderListBox = styled.div`
  height: 160px;
  padding: 7px;
  overflow: scroll;
  border: 1px solid #e0e0e0;
  border-top: 2px solid #4f4f4f;
  position: relative;
`;

export const Folder = styled.div`
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

export const AddFolderText = styled.div`
  font-weight: 500;
  line-height: 19px;
  font-size: 13px;
  color: #4285f4;
  align-self: center;
  margin-top: 4px;
  cursor: pointer;
`;
