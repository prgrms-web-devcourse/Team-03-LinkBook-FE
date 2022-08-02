import { useState } from 'react';
import { Button, Modal } from '../../components';

const folderListPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleShow}>
        첫 방문자 로직
      </Button>
      <Modal version="firstLogin" show={showModal} closeFunc={handleClose} />
    </div>
  );
};

export default folderListPage;
