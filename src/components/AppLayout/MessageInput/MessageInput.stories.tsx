import React from 'react';
import 'antd/dist/antd.css';
import { MessageInput } from './MessageInput';

export const ExampleMessageInput = () => (
  <MessageInput
    message={'some message'}
    submitting={false}
    onChangeMessage={() => {}}
    onSendMessage={() => {}}
  />
);

export default {
  title: 'ExampleMessageInput',
};
