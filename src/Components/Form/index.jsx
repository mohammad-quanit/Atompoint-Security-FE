import React from 'react';
import { Alert, Button, Form, Input, notification, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { axiosInstance } from '../../Config/axios';


const UnlocklistForm = ({ setIsModalVisible }) => {
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post('/sendemail', values);
      setLoading(false);
      setIsModalVisible(false);
      notification.open({
        message: `Unlock Checklist Link`,
        description: (
          <div>
            <Button onClick={() => window.open(response.data, '_blank')}>
              Open email Link
            </Button>
          </div>
        ),
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
