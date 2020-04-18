import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css';
import { useUserContext } from '../../hooks/UseUserContext/UseUserContext';

const LoginForm = () => {
  const { setUser } = useUserContext();

  const onFinish = (values: { [name: string]: any }) => {
    console.log('Received values of form: ', values);
    setUser({
      email: values['email'],
      avatarLink:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      role: 'user',
    });
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          type='email'
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button '>
          Log in
        </Button>
        {/* Or <a href=''>register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export { LoginForm };
