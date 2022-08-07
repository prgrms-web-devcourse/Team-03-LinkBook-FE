import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Icon } from "../components";
import * as S from "./MainPage.style";

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
    <S.Container>
      <S.IconWraaper>
        <Icon name="logo" width={50} height={30} />
        <Icon
          name="btn_x"
          width={13}
          height={13}
          onClick={() => window.close()}
        />
      </S.IconWraaper>
      <S.ImageWrapper>
        <img
          width={87}
          height={87}
          src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
          alt=""
          onError={handleErrorImg}
        />
      </S.ImageWrapper>
      <S.UrlWrapper>{url}</S.UrlWrapper>
      <S.Input ref={inputRef} placeholder="북마크 이름" />
      <S.FolderSelector>{folderSelector}</S.FolderSelector>
      <S.ButtonWrapper>
        <S.StoreButton disabled={buttonDisabled}>저장</S.StoreButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MainPage;
