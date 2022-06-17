import React from 'react';

import Home from './Pages/Home';
import Header from './Components/Header';
import FilterContainer from './Components/FilterContainer';

import './App.css';
import { Progress } from 'antd';

const ProgressBar = ({ values }) => {
  const percent = (values[0] / values[1]) * 100;
  return (
    <>
      <h3>How Secure is your cloud?</h3>
      <h3>{values[0]} / {values[1]}</h3>
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

function App() {
  const [data, setData] = React.useState('');
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [total, setTotal] = React.useState([]);

  return (
    <div className='App'>
      <Header title='Cloud Security Checklist' />
      <FilterContainer data={data} setData={setData} />
      <ProgressBar values={[selectedRowKeys.length, total]} />
      <Home
        // total={total}
        setTotal={setTotal}
        data={data}
        setData={setData}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
      />
    </div>
  );
}

export default App;
