import React from 'react';
import { Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import UnlocklistModal from '../Modal';

const UnlockChecklistButton = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const clickHandler = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Button icon={<LockOutlined />} onClick={clickHandler}>
        Unlock Checklist
      </Button>
      <UnlocklistModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default UnlockChecklistButton;
