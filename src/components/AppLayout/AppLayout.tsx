import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import './AppLayout.css';
import { AppContextProvider } from '../common/context/AppContext/AppContextProvider';
import { Background } from './Background/Background';
import { AppRouter } from './AppRouter/AppRouter';
import { store } from '../../store';

const AppLayout = () => {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <Background />
        <Layout className='layout layout-stretched'>
          <AppRouter />
        </Layout>
      </Provider>
    </AppContextProvider>
  );
};

export { AppLayout };
