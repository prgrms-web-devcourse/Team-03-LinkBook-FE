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

  const [page, setPage] = useState(0);

  const handleModalClose = () => {
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
            handleSelectFolder={handleSelectFolder}
            handleAddFolder={nextPage}
          />
        );
      case 1:
        return (
          <FolderModal02
            handelPrevPage={prevPage}
            modalClose={handleModalClose}
          />
        );
      default:
        <FolderModal01
          handleSelectFolder={handleSelectFolder}
          handleAddFolder={nextPage}
        />;
    }
  };
  return (
    <>
      {isVisible && (
        <>
          <S.Dim onClick={handleModalClose} />
          <S.Container>
            <S.CloseButtonWrapper>
              <Icon
                name="btn_x"
                width={10}
                height={10}
                onClick={handleModalClose}
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
