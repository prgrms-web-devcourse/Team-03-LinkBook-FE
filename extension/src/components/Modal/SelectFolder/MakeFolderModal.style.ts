import styled from "@emotion/styled";
import Button from "../../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  align-items: center;
`;

export const FolderTitleInput = styled.input`
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 12px 18px;
  font-size: 11px;
  width: 100%;
  line-height: 16px;
  margin-bottom: 17px;
  margin-top: 5px;
`;

export const SelectPrivateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #4285f4;
  cursor: pointer;
`;

export const SelectRangeWrapper = styled.div`
  padding: 7px;
  overflow: scroll;
  border: 1px solid #e0e0e0;
  position: relative;
  border-top: 0;
  border-radius: 5px;
`;

export const SelectRange = styled.div`
  width: 115px;
  padding: 6px 9px;
  font-size: 11px;
  line-height: 11px;
  color: #4f4f4f;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const MakeFolderButton = styled(Button)`
  background-color: #4285f4;
  padding: 9.5px 31px;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  border-radius: 56px;
  cursor: pointer;
`;
