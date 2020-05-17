import React from 'react';
import './MessageItem.css';
import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';

type MessageItemType = {
  avatarLink: string;
  message: string;
  owner: string;
  effDateTime: string;
  origin: 'my' | 'not-mine'
};

const MessageItem = ({ avatarLink, message, effDateTime, owner, origin }: MessageItemType) => {
  const momentEffDateTime = moment(effDateTime);

  let avatar = null;
  let author = null;
  if(origin === 'my') {
    author = <a>Me</a>;
  } else {
    author = <a>{owner}</a>;
    avatar = <Avatar src={avatarLink} alt={owner} />;
  }

  return (
    <div className='msg-item'>
      <Comment
        className={`msg-item__specific msg-item__whose_${origin}`}
        author={author}
        avatar={avatar}
        content={<span>{message}</span>}
        datetime={
          <Tooltip title={effDateTime}>
            <span>{momentEffDateTime.fromNow()}</span>
          </Tooltip>
        }
      ></Comment>
    </div>
  );
};

export { MessageItem };

export type {MessageItemType}