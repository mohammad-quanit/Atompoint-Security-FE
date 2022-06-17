import React from 'react';
import { FilterByCloudProvider } from '../FilterItem/provider';
import { FilterByCloudService } from '../FilterItem/services';

import './index.css';

const FilterContainer = ({ data, setData }) => {
  return (
    <div className='filter-container'>
      <h3>Filter </h3>
      <FilterByCloudProvider data={data} setData={setData} />
      {/* <FilterByCloudService data={data} /> */}
    </div>
  );
};

export default FilterContainer;
