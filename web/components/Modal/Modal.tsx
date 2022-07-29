import { MouseEventHandler, useEffect, useState } from 'react';
import Icon from '../Icon';
import Login from './Login';
import * as S from './Modal.style';

interface Props {
  version: 'login' | 'signUp';
  show: boolean;
  closeFunc: MouseEventHandler;
}

const Modal = ({ version, show, closeFunc }: Props) => {
  const [modalShow, setModalShow] = useState(show);

  useEffect(() => {
    setModalShow(show);
  }, [show]);

  return (
    <>
      {modalShow && (
        <>
          <S.Dim onClick={closeFunc} />
          <S.Container>
            <S.ModalTitle>
              <S.Logo>링북</S.Logo>
              <S.CloseBtn onClick={closeFunc}>
                <Icon name="x" size={10} />
              </S.CloseBtn>
            </S.ModalTitle>
            {version === 'login' ? <Login /> : ''}
          </S.Container>
        </>
      )}
    </>
  );
};

export default Modal;
