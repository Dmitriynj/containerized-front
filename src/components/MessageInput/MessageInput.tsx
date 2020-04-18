import React from 'react';
import './MessageInput.css';
import { isEmpty } from 'lodash';
import { Avatar, Button, Input, Form } from 'antd';
import { LoadingOutlined, SendOutlined } from '@ant-design/icons';
import { useDebounceFn } from '@umijs/hooks';
import { useUserContext } from '../common/hooks/UseUserContext/UseUserContext';
import { UserType } from '../common/context/UserContext';

const { TextArea } = Input;
const FIELD_NAME = 'message';
const TEXT_AREA_MAX_ROWS = 2;
const TEXT_AREA_MIN_ROWS = 1;
const DEBOUNCE_WAIT = 300;

type MessageInput = {
  message: string | undefined;
  submitting: boolean;
  onChangeMessage(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  onSendMessage(message: string | undefined): void;
};

const MessageInput = ({
  message,
  submitting,
  onChangeMessage,
  onSendMessage,
}: MessageInput) => {
  const { user } = useUserContext();
  const [form] = Form.useForm();
  const { run: sendMessage } = useDebounceFn(() => {
    onSendMessage(message);
  }, DEBOUNCE_WAIT);
  const sendIcon = submitting ? <LoadingOutlined /> : <SendOutlined />;
  const avatarLink =
    user && user.avatarLink !== '' ? user.avatarLink : undefined;

  const onSend = () => {
    if (!isEmpty(message)) {
      sendMessage();
      form.resetFields();
    }
  };

  const onPressEnter = () => form.submit();

  return (
    <Form
      className='msg-form'
      form={form}
      name='message-input'
      onFinish={onSend}
    >
      <Avatar
        className='msg-form-item__avatar'
        src={avatarLink}
        alt='Han Solo'
      />
      <Form.Item className='msg-form-item' name={FIELD_NAME}>
        <TextArea
          className='msg-input'
          placeholder='Type message'
          autoSize={{
            minRows: TEXT_AREA_MIN_ROWS,
            maxRows: TEXT_AREA_MAX_ROWS,
          }}
          onChange={onChangeMessage}
          value={message}
          onPressEnter={onPressEnter}
        />
      </Form.Item>
      <Form.Item className='msg-form-item'>
        <Button
          type='primary'
          htmlType='submit'
          className={`msg-send msg-send__is-submiting_${submitting}`}
          loading={submitting}
        >
          {sendIcon}
        </Button>
      </Form.Item>
    </Form>
  );
};

export { MessageInput };
