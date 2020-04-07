import React from 'react';
import './MessageItem.css';
import { Avatar, Comment, Skeleton, Tooltip } from 'antd';
import moment from 'moment';

type MessageItem = {
  loading: boolean;
};

const MessageItem = ({ loading }: MessageItem) => {
  const content = loading ? (
    <Skeleton
      className='msg-skeleton'
      avatar={{ shape: 'circle', size: 26 }}
      title={{
        style: {
          'margin-top': 6,
        },
      }}
      paragraph={{
        rows: 1,
        style: {
          'margin-top': 10,
        },
      }}
      active
    />
  ) : (
    <Comment
      avatar={
        <Avatar
          src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
          alt='Han Solo'
        />
      }
      content={
        <div>
          Hi,someloremtextsdfsdgfasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    ></Comment>
  );

  return <div className='msg-content'>{content}</div>;
};

export { MessageItem };
