import React from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import './RegisterForm.css';
import { AnimatedConent } from '../../common/components/AnimatedContent/AnimatedContent';
import { useAnimation } from '../../common/hooks/UseAnimation/UseAnimation';

const { Content } = Layout;
const TIMEOUT = { enter: 750, exit: 150 };
const emailRules: any = [
  {
    required: true,
    message: 'Please provide email!',
  },
  {
    type: 'email',
    message: 'Please input valid one!',
  },
];
const agreementRules = [
  {
    validator: (_: any, value: any) =>
      value ? Promise.resolve() : Promise.reject('We need your agree start!'),
  },
];

const RegisterForm = () => {
  const animatedRef = useAnimation('RegisterFormTimeline');

  const onFinish = (values: { [name: string]: any }) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Content className='register'>
      <div ref={animatedRef} className='site-layout-content register__content'>
        <div>
          <h1>Join now!</h1>
          <Form
            name='basic'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name='email' rules={emailRules}>
              <div className='register__input-from'>
                <label className='register__input-label'>Email adress</label>
                <Input
                  id='ssad'
                  size='large'
                  className='register__input'
                  placeholder='Type email here'
                />
              </div>
            </Form.Item>
            <Form.Item
              name='agreement'
              valuePropName='checked'
              rules={agreementRules}
            >
              <Checkbox className='register__checkbox'>
                I agree to the
                <Button type='link'>Privacy</Button>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                size='large'
                shape='round'
                type='primary'
                htmlType='submit'
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
};

export { RegisterForm };
