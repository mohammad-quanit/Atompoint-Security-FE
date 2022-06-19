import React from 'react';
import { Progress } from 'antd';

const ProgressBar = ({ values }) => {
  const percent = (values[0] / values[1]) * 100;
  return (
    <>
      <h3>How Secure is your cloud?</h3>
      <h3>
        {values[0]} / {values[1]}
      </h3>
      <Progress
        className='progress-class'
        showInfo={false}
        percent={percent}
        strokeLinecap='square'
        strokeColor='#1890ff'
      />
    </>
  );
};


export default ProgressBar