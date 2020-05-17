import React, { useRef, useEffect } from 'react';
import { Layout } from 'antd';
import { defaultEnterTimeline } from '../../common/timelines/DefaultEnterTimeline';
import './ContentWrapper.css';

const { Content } = Layout;

type ContentWrapper = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapper) => {
  const content = useRef<HTMLElement | any>();

  useEffect(() => {
    requestAnimationFrame(() => defaultEnterTimeline(content.current).play());
  }, []);

  return (
    <Content className='content'>
      <div className={`site-layout-content`} ref={content}>
        <div>{children}</div>
      </div>
    </Content>
  );
};

export { ContentWrapper };
