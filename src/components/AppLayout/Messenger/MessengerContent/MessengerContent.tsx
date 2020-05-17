import React, { useEffect, useState } from 'react';
import './MessengerContent.css';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper';
import { MessageHistory } from '../MessagesHistory/MessagesHistory';
import { Message } from '../../../../types/model';
import { MessageInput } from '../MessageInput/MessageInput';
import { useAppContext } from '../../../common/hooks/UseAppContext/UseAppContext';
import { useRequest } from '@umijs/hooks';

type MessengerContent = {
  
};

const MessengerContent = () => {
  // const [messages, setMessages] = useState<Message[]>([]);
  // const {loading} = useRequest(getMessages, {
  //   manual: true,
  // });
  

  useEffect(() => {

  }, []);

  const sendMessage = () => {

  }

  return (
    <ContentWrapper>
      {/* <MessageHistory messages={messages} /> */}
      {/* <MessageInput submitting={loading}/> */}
    </ContentWrapper>
  );
};

export { MessengerContent };
