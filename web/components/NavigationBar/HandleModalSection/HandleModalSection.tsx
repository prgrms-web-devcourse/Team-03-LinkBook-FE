import { useRecoilValue } from 'recoil';
import { showModalStatus } from '../../../recoil/showModal';
import { Modal } from '../../index';

const HandleModalSection = () => {
  const showModal = useRecoilValue(showModalStatus);

  return (
    <>
      <Modal version="login" show={showModal.Login} />
      <Modal version="signUp" show={showModal.SignUp} />
      <Modal version="firstLogin" show={showModal.FirstLogin} />
    </>
  );
};

export default HandleModalSection;
