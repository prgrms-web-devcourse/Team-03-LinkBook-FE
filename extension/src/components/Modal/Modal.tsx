import React, { useState } from "react";
import Icon from "../Icon";
import * as S from "./Modal.style";
import { FolderModal01, FolderModal02 } from "./SelectFolder";

interface Props {
  isVisible: boolean;
  modalClose: () => void;
  handleSelectFolder: (id: number, title: string) => void;
}

const Modal = ({ isVisible, modalClose, handleSelectFolder }: Props) => {
  // const [page, setPage] = useState(0);
  // const switchModal = () => {
  //   switch (page) {
  //     case 0:
  //       <FolderModal01
  //         handleAddFolder={setPage((prev) => prev + 1)}
  //         handleSelectFolder={handleSelectFolder}
  //       />;
  //       break;
  //     case 1:
  //       <FolderModal02 />;
  //       break;
  //     default:
  //       <FolderModal01
  //         handleAddFolder={setPage((prev) => prev + 1)}
  //         handleSelectFolder={handleSelectFolder}
  //       />;
  //   }
  // };
  return (
    <>
      {isVisible && (
        <>
          <S.Dim onClick={modalClose} />
          <S.Container>
            <S.CloseButtonWrapper>
              <Icon name="btn_x" width={10} height={10} onClick={modalClose} />
            </S.CloseButtonWrapper>
            <FolderModal01 handleSelectFolder={handleSelectFolder} />
          </S.Container>
        </>
      )}
    </>
  );
};

export default Modal;
