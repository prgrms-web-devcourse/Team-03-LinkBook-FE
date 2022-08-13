import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Icon } from "../../components";
import Modal from "../../components/Modal";
import { IUserContext, useUserContext } from "../../contexts/ContextProvider";
import { createBookmark, getUserInfo } from "../../utils/api";

import * as S from "./MainPage.style";
import Submit from "./components/Submit";

const MainPage = () => {
  const { setUserInfo } = useUserContext() as IUserContext;
  const inputRef = useRef<HTMLInputElement>(null);
  const [folderSelector, setFolderSelector] = useState({
    id: 0,
    title: "📁 북마크 폴더 선택",
    url: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getUrl = () => {
    chrome.tabs &&
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url) handleTabsCallback(tabs[0].url);
      });
  };

  useEffect(() => {
    getUrl();
    (async function () {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  const handleTabsCallback = (url: string) => {
    setFolderSelector({
      ...folderSelector,
      url,
    });
  };

  const handleErrorImg = (e: ChangeEvent<HTMLImageElement>) => {
    e.target.src = "/icons/defaultImg.png";
  };

  const handleSubmit = () => {
    if (
      folderSelector.title === "📁 북마크 폴더 선택" ||
      inputRef.current?.value === ""
    ) {
      alert("북마크 이름을 작성해주세요");
      return;
    }

    createBookmark({
      folderId: folderSelector.id,
      url: folderSelector.url,
      title: inputRef.current!.value,
    });
    setIsSubmitted(true);
  };

  const handleFolderMade = (id: number, title: string) => {
    setFolderSelector({
      ...folderSelector,
      id,
      title,
    });
    setButtonDisabled(false);
    setModalVisible(false);
  };

  return !isSubmitted ? (
    <S.Container>
      <Modal
        isVisible={modalVisible}
        handleFolderMade={handleFolderMade}
        modalClose={() => setModalVisible(false)}
      />
      <S.IconWraaper>
        <S.LogoIconWrapper href="https://linkbook.tk/" target="_blank">
          <Icon name="logo" width={35} height={20} />
        </S.LogoIconWrapper>
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
          src={`https://www.google.com/s2/favicons?domain=${folderSelector.url}&sz=128`}
          alt=""
          onError={handleErrorImg}
        />
      </S.ImageWrapper>
      <S.UrlWrapper>{folderSelector.url}</S.UrlWrapper>
      <S.Input ref={inputRef} placeholder="북마크 이름" />
      <S.FolderSelector onClick={() => setModalVisible(true)}>
        {folderSelector.title} ▼
      </S.FolderSelector>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={handleSubmit} disabled={buttonDisabled}>
          저장
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Container>
  ) : (
    <Submit />
  );
};

export default MainPage;
