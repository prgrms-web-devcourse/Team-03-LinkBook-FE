import * as S from './Modal.style';
import { useEffect, useState } from 'react';
import { Icon } from '../index';
import FirstLogin from './FirstLogin';
import Login from './Login';
import SignUp from './SignUp';
import User from './User';
import Scrap from './Scrap';
import { useSetRecoilState } from 'recoil';
import { showModalStatus } from '../../recoil/showModal';
import { closeModal } from '../../constants/modal.constants';
import { ScrapOriginFolder } from '../../types';

interface Props {
  version: 'login' | 'signUp' | 'firstLogin' | 'bookmark' | 'user' | 'scrap';
  show: boolean;
  originFolder?: ScrapOriginFolder;
  setScrapFolder?: ({ title, isPrivate, isPinned }: ScrapOriginFolder) => void;
}

const Modal = ({ version, show, originFolder, setScrapFolder }: Props) => {
  const [modalShow, setModalShow] = useState(show);
  const setShowModalStatus = useSetRecoilState(showModalStatus);

  useEffect(() => {
    setModalShow(show);
  }, [show]);

  const handleCloseModal = () => {
    setShowModalStatus(closeModal);
  };

  const handleVersion = (versionStr: string) => {
    switch (versionStr) {
      case 'login':
        return <Login />;
      case 'signUp':
        return <SignUp />;
      case 'user':
        return <User />;
      case 'scrap':
        return (
          <Scrap originFolder={originFolder} setScrapFolder={setScrapFolder} />
        );
      default:
        return <FirstLogin />;
    }
  };

  return (
    <>
      {modalShow && (
        <>
          <S.Dim onClick={handleCloseModal} />
          <S.Container>
            <S.ModalTitle>
              <S.Logo>링북</S.Logo>
              <S.CloseBtn onClick={handleCloseModal}>
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
