import React from 'react';
import './MessangerContent.css';
import { MessageHistory } from '../MessagesHistory/MessagesHistory';
import { MessageInput } from '../MessageInput/MessageInput';
import { MessageItemType } from '../MessageItem/MessageItem';
import { UserContextProvider } from '../common/context/UserContextProvider';
import { LoginForm } from '../common/components/Login/LoginForm';

type MessangerContentType = {
  messages: (MessageItemType & { id: number })[];
};

const MessangerContent = ({ messages }: MessangerContentType) => {
  return (
    <UserContextProvider>
      <MessageHistory messages={messages}></MessageHistory>
      <MessageInput
        submitting={false}
        message='das'
        onChangeMessage={() => {}}
        onSendMessage={() => {}}
      />
      <LoginForm />
    </UserContextProvider>
  );
};

export { MessangerContent };
