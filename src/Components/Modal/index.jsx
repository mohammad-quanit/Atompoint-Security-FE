import React from 'react';
import { Modal } from 'antd';

import UnlocklistForm from '../Form';

const UnlocklistModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title='Form'
      visible={isModalVisible}
      footer={null}
      destroyOnClose={true}
      closable={true}
      onCancel={handleCancel}
    >
      <UnlocklistForm setIsModalVisible={setIsModalVisible} />
    </Modal>
  );
};

export default UnlocklistModal;
