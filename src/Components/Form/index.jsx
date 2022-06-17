import React from 'react';
import axios from 'axios';
import { Button, Form, Input, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { sendEmailApiUrl } from '../../Utils';

const UnlocklistForm = ({ setIsModalVisible }) => {
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(sendEmailApiUrl, values);
      setLoading(false);
      setIsModalVisible(false);
      notification.info({
        message: `Unlock Checklist Link`,
        description: response.data,
        placement: 'topRight',
      });
    } catch (error) {
      setLoading(false);
      setIsModalVisible(false);
      notification.error({
        message: `Error`,
        description: error,
        placement: 'topRight',
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Organiztion'
        name='organization'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Phone #'
        name='phone'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default UnlocklistForm;
