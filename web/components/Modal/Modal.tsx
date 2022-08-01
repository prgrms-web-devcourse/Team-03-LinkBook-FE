import { MouseEventHandler, useEffect, useState } from 'react';
import Icon from '../Icon';
import FirstLogin from './FirstLogin';
import Login from './Login';
import SignUp from './SignUp';
import * as S from './Modal.style';

interface Props {
  version: 'login' | 'signUp' | 'firstLogin';
  show: boolean;
  closeFunc: MouseEventHandler;
  switchFunc?: MouseEventHandler;
}

const Modal = ({ version, show, closeFunc, switchFunc }: Props) => {
  const [modalShow, setModalShow] = useState(show);

  useEffect(() => {
    setModalShow(show);
  }, [show]);

  const handleVersion = (versionStr: string) => {
    switch (versionStr) {
      case 'login':
        return <Login switchFunc={switchFunc} />;
      case 'signUp':
        return <SignUp />;
      default:
        return <FirstLogin />;
    }
  };

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
            {handleVersion(version)}
          </S.Container>
        </>
      )}
    </>
  );
};

export default Modal;
