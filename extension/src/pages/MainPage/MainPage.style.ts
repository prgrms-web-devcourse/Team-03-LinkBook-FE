import styled from "@emotion/styled";
import { Button } from "../../components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 380px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IconWraaper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  align-self: center;
  margin: 15px auto;
`;

export const UrlWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;

  color: #bdbdbd;
  width: 100%;
  height: 16px;
  margin-bottom: 11px;
`;

export const Input = styled.input`
  padding: 12px 18px;
  color: #4f4f4f;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 11px;
  line-height: 16px;
  width: 100%;
  margin-bottom: 14px;
`;

export const FolderSelector = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4285f4;
  cursor: pointer;
`;

export const StoreButton = styled(Button)<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9.5px 31px;
  width: 88px;
  height: 39px;
  background: #e0e0e0;
  border-radius: 56px;

  background-color: ${({ disabled }) => (disabled ? "#e0e0e0" : "#4285f4")};
  cursor: ${({ disabled }) => disabled || "pointer"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 65px;
`;
