import React, { useState } from 'react';
import './MessageInput.css';
import { debounce, isEmpty } from 'lodash';
import { Avatar, Button, Input, Form, Skeleton } from 'antd';
import {SendOutlined} from '@ant-design/icons';

const { TextArea } = Input;
const FIELD_NAME = 'message';

type MessageInput = {
  loading: boolean;
};

const MessageInput = ({ loading }: MessageInput) => {
  const [form] = Form.useForm();
  const [value, setValue] = useState<string>();
  const [submitting, setSubmitting] = useState<boolean>(loading);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const onPressEnter = () => form.submit();

  const onSend = (values: { [name: string]: any }) => {
    setSubmitting(true);
    if (!isEmpty(value)) {
      debounce(() => {
        // some async call
        console.log(values[FIELD_NAME]);
      }, 300);
      form.resetFields();
    }
    setSubmitting(false);
  };

  const avatarIcon = loading ? (
    <Skeleton.Avatar
      className='msg-form-item__skeleton'
      active={true}
      size={26}
      shape={'circle'}
    />
  ) : (
    <Avatar
      className='msg-form-item__avatar'
      src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      alt='Han Solo'
    />
  );

  return (
    <Form
      className='msg-form'
      form={form}
      name='message-input'
      onFinish={onSend}
    >
      {avatarIcon}
      <Form.Item className='msg-form-item' name={FIELD_NAME}>
        <TextArea
          className='msg-input'
          placeholder='Type message'
          autoSize={{ minRows: 1, maxRows: 2 }}
          onChange={onChange}
          value={value}
          onPressEnter={onPressEnter}
        />
      </Form.Item>
      <Form.Item className='msg-form-item'>
        <Button
          type='primary'
          htmlType='submit'
          className='msg-send'
          loading={submitting}
        >
          <SendOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

export { MessageInput };
