import React from 'react';
import { 
  MessageItem } from '../MessageItem/MessageItem';
import './MessagesHistory.css';
import { useScrollbar } from '../../../common/hooks/UseScrollbar/UseScrollbar';
import { Message } from '../../../../types/model';

type MessageHistory = {
  messages: Message[];
};

const MessageHistory = ({ messages }: MessageHistory) => {
  const scrollbarRef = useScrollbar(null);

  const messagesList = messages.map(message => {
    return (
      <MessageItem
        key={message.id}
        avatarLink={message.avatarLink}
        message={message.message}
        owner={message.owner}
        origin={message.origin}
        effDateTime={message.effDateTime}
      />
    );
  });
  return (
    <div className='msg-history-container' ref={scrollbarRef}>
      {messagesList}
    </div>
  );
};

export { MessageHistory };
