import React from 'react';

import Home from './Pages/Home';
import Header from './Components/Header';
import FilterContainer from './Components/FilterContainer';
import ProgressBar from './Components/ProgressBar';

import './App.css';

function App() {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState(data);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [total, setTotal] = React.useState([]);

  return (
    <div className='App'>
      <Header title='Cloud Security Checklist' />
      <FilterContainer
        data={data}
        setData={setData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <ProgressBar values={[selectedRowKeys.length, total]} />
      <Home
        setTotal={setTotal}
        data={data}
        setData={setData}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
