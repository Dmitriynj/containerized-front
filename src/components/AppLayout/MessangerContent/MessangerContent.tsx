import React from 'react';
import './MessangerContent.css';
import { MessageHistory } from '../MessagesHistory/MessagesHistory';
import { MessageInput } from '../MessageInput/MessageInput';
import { MessageItemType } from '../MessageItem/MessageItem';
import { AuthContextProvider } from '../../common/context/AuthContextProvider';

type MessangerContentType = {
  messages: (MessageItemType & { id: number })[];
};

const MessangerContent = ({ messages }: MessangerContentType) => {
  return (
    <AuthContextProvider>
      <MessageHistory messages={messages}></MessageHistory>
      <MessageInput
        submitting={false}
        message='das'
        onChangeMessage={() => {}}
        onSendMessage={() => {}}
      />
      {/* <LoginForm /> */}
    </AuthContextProvider>
  );
};

export { MessangerContent };
