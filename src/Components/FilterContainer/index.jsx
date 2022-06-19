import React from 'react';
import { FilterByCloudProvider } from '../FilterItem/provider';

import './index.css';

const FilterContainer = ({ data, setData, filteredData, setFilteredData }) => {
  return (
    <div className='filter-container'>
      <h3>Filter By:</h3>
      <FilterByCloudProvider
        data={data}
        setData={setData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default FilterContainer;
