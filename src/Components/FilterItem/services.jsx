import React from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

export const FilterByCloudService = () => {
  return (
    <div>
      <Form.Item
        name='select-multiple'
        label='Cloud Service'
        rules={[
          {
            required: false,
            message: 'Fliter by Cloud Service',
            type: 'array',
          },
        ]}
      >
        <Select
          style={{ width: '30%' }}
          size='large'
          mode='multiple'
          placeholder='Click here to select cloud Service'
        >
          <Option value='red'>Red</Option>
          <Option value='green'>Green</Option>
          <Option value='blue'>Blue</Option>
        </Select>
      </Form.Item>
    </div>
  );
};
