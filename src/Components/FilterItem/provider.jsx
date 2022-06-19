import React from 'react';
import axios from 'axios';
import { Form, Select } from 'antd';
import { addKeysForColumns } from '../../Utils';
const { Option } = Select;

export const FilterByCloudProvider = ({ data, setData, filteredData, setFilteredData }) => {
  const handleChange = async (value) => {
    console.log(value)
    setFilteredData(data.filter(({ cloud }) => value.includes(cloud)))
    // const filteredData = data.filter(({ cloud }) => value.includes(cloud));
    // console.log(filteredData);
    // setData(filteredData);
  };
  return (
    <div>
      <Form.Item
        name='select-multiple'
        label='Cloud Provider'
        rules={[
          {
            required: false,
            message: 'Filter by Cloud Provider',
            type: 'array',
          },
        ]}
      >
        <Select
          style={{ width: '30%' }}
          size='large'
          mode='multiple'
          placeholder='Click here to select cloud provider'
          onChange={handleChange}
        >
          <Option value='AWS'>AWS</Option>
          <Option value='GCP'>GCP</Option>
          <Option value='AZURE'>AZURE</Option>
        </Select>
      </Form.Item>
    </div>
  );
};
