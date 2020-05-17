import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { Rule } from 'antd/lib/form';
import { useRequest } from '@umijs/hooks';
import { LoadingOutlined } from '@ant-design/icons';
import './SubscriptionForm.css';
import { EMAIL_PATTERN } from '../../../../config/constants';
import { sendSubscriptionEmail } from '../../../../store/user/actions';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper';

const emailRules: Rule[] = [
  {
    required: true,
    message: 'Please provide email!',
  },
  {
    pattern: EMAIL_PATTERN,
    message: 'Please enter valid email!',
  },
];
const agreementRules: Rule[] = [
  {
    validator: (_: any, value: any): Promise<void> =>
      value ? Promise.resolve() : Promise.reject('We need your agree start!'),
  },
];

const connector = connect(null, {
  sendSubscriptionEmail,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

const SubscriptionFormComponent = ({
  sendSubscriptionEmail,
}: PropsFromRedux) => {
  const { loading, run } = useRequest(sendSubscriptionEmail, {
    manual: true,
    debounceInterval: 500,
    onSuccess: () => {},
    onError: () => {},
  });

  const sendEmail = async (values: { [name: string]: any }): Promise<any> => {
    console.log(values['email']);
    run(values['email']);
  };

  return (
    <ContentWrapper>
      <h1>Join now!</h1>
      <Form
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={sendEmail}
      >
        <Form.Item name='email' rules={emailRules}>
          <div className='sub__input-from'>
            <label >Email adress</label>
            <Input
              id='ssad'
              size='large'
              placeholder='Type email here'
            />
          </div>
        </Form.Item>
        <Form.Item
          name='agreement'
          valuePropName='checked'
          rules={agreementRules}
        >
          <Checkbox className='sub__checkbox'>
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
            disabled={loading}
          >
            Submit
          </Button>
          {loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
        </Form.Item>
      </Form>
    </ContentWrapper>
  );
};

const SubscriptionForm = connector(SubscriptionFormComponent);

export { SubscriptionForm };
