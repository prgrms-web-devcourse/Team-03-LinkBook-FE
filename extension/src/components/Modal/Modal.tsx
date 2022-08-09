import React, { useState } from "react";
import Icon from "../Icon";
import * as S from "./Modal.style";
import { FolderModal01, FolderModal02 } from "./SelectFolder";

interface Props {
  isVisible: boolean;
  handleFolderMade: (id: number, title: string) => void;
  modalClose: () => void;
}

const Modal = ({ isVisible, handleFolderMade, modalClose }: Props) => {
  const [page, setPage] = useState(0);

  const handleModalClose = (id: number, title: string) => {
    handleFolderMade(id, title);
    setPage(0);
  };

  const handleMdoalForceClose = () => {
    modalClose();
    setPage(0);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const switchModal = (page: number) => {
    switch (page) {
      case 0:
        return (
          <FolderModal01
            handleSelectFolder={handleModalClose}
            handleAddFolder={nextPage}
          />
        );
      case 1:
        return (
          <FolderModal02
            handelPrevPage={prevPage}
            handleMakeFolder={handleModalClose}
          />
        );
      default:
        <FolderModal01
          handleSelectFolder={handleFolderMade}
          handleAddFolder={nextPage}
        />;
    }
  };
  return (
    <>
      {isVisible && (
        <>
          <S.Dim onClick={handleMdoalForceClose} />
          <S.Container>
            <S.CloseButtonWrapper>
              <Icon
                name="btn_x"
                width={10}
                height={10}
                onClick={handleMdoalForceClose}
              />
            </S.CloseButtonWrapper>
            {switchModal(page)}
          </S.Container>
        </>
      )}
    </>
  );
};

export default Modal;
