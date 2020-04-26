import React from 'react';
import 'antd/dist/antd.css';
import { MessageItem } from './MessageItem';

import '../../index.css';
import moment from 'moment';

export const ExampleMessageItem = () => (
  <MessageItem
    avatarLink={
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
    message={
      'Hisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    }
    owner='Dmitry Tomashevich'
    origin={'my'}
    effDateTime={moment().format('YYYY-MM-DD HH:mm:ss')}
  />
);

export default {
  title: 'MessageItem',
};
