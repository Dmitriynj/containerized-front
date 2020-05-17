import React from 'react';
import 'antd/dist/antd.css';
import { MessengerContent } from './MessengerContent';
import moment from 'moment';
import { DATE_TIME_PATTERN } from '../../../../config/constants';

const momentNow = moment().format(DATE_TIME_PATTERN);
const avatarLink =
  'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

export const ExampleMessengerContent = () => (
  <MessengerContent
    messages={[
      {
        id: 1,
        avatarLink,
        message: 'Hello!',
        owner: 'Dmitry Tomashevich',
        origin: 'my',
        effDateTime: momentNow,
      },
      {
        id: 2,
        avatarLink,
        message: 'Hi',
        owner: 'Dmitry Tomashevich',
        origin: 'not-mine',
        effDateTime: momentNow,
      },
      {
        id: 3,
        avatarLink,
        message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        owner: 'Dmitry Tomashevich',
        origin: 'my',
        effDateTime: momentNow,
      },
      {
        id: 4,
        avatarLink,
        message: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        owner: 'Dmitry Tomashevich',
        origin: 'not-mine',
        effDateTime: momentNow,
      },
      {
        id: 5,
        avatarLink,
        message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        owner: 'Dmitry Tomashevich',
        origin: 'my',
        effDateTime: momentNow,
      },
    ]}
  />
);

export default {
  title: 'MessengerContent',
};
