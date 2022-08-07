import React from "react";
import * as S from "./Modal.style";

interface Props {
  isVisible: boolean;
  modalClose: () => void;
}

const Modal = ({ isVisible, modalClose }: Props) => {
  return (
    <>
      {isVisible && (
        <>
          <S.Dim onClick={modalClose} />
          <S.Container></S.Container>
        </>
      )}
    </>
  );
};

export default Modal;
