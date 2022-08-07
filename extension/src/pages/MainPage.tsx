import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button, Icon } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 380px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const IconWraaper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  align-self: center;
  margin: 15px auto;
`;

const UrlWrapper = styled.div`
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

const Input = styled.input`
  padding: 12px 18px;
  color: #bdbdbd;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 11px;
  line-height: 16px;
  width: 100%;
  margin-bottom: 14px;
`;

const FolderSelector = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4285f4;
  cursor: pointer;
`;

const StoreButton = styled(Button)<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9.5px 31px;
  width: 88px;
  height: 39px;
  background: #e0e0e0;
  border-radius: 56px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #4285f4;
      cursor: pointer;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 65px;
`;

const MainPage = () => {
  const [url, setUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [folderSelector, setFolderSelector] = useState("📁 북마크 폴더 선택 ▼");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const getUrl = () => {
    chrome.tabs &&
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url) handleTabsCallback(tabs[0].url);
      });
  };
  useEffect(() => {
    getUrl();
  }, []);

  const handleTabsCallback = (url: string) => {
    console.log(url);
    setUrl(url);
  };

  const handleErrorImg = (e: ChangeEvent<HTMLImageElement>) => {
    e.target.src = "/icons/defaultImg.png";
  };

  return (
    <Container>
      <IconWraaper>
        <Icon name="logo" width={50} height={30} />
        <Icon
          name="btn_x"
          width={13}
          height={13}
          onClick={() => window.close()}
        />
      </IconWraaper>
      <ImageWrapper>
        <img
          width={87}
          height={87}
          src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
          alt=""
          onError={handleErrorImg}
        />
      </ImageWrapper>
      <UrlWrapper>{url}</UrlWrapper>
      <Input ref={inputRef} placeholder="북마크 이름" />
      <FolderSelector>{folderSelector}</FolderSelector>
      <ButtonWrapper>
        <StoreButton disabled={buttonDisabled}>저장</StoreButton>
      </ButtonWrapper>
    </Container>
  );
};

export default MainPage;
