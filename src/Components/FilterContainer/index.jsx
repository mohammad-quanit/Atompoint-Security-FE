import React from 'react';
import { FilterByCloudProvider } from '../FilterItem/provider';

import './index.css';

const FilterContainer = ({ data, setFilteredData }) => {
  return (
    <div className='filter-container'>
      <h3>Filter By:</h3>
      <FilterByCloudProvider
        data={data}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default FilterContainer;
