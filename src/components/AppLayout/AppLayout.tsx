import React from 'react';
import { Layout } from 'antd';
import './AppLayout.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../common/hooks/UseAuthContext/UseAuthContext';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { MessangerContent } from './MessangerContent/MessangerContent';
import BackgroundImage from '../../assets/icons/shapes112.svg';
import {AnimatedConent} from '../common/components/AnimatedContent/AnimatedContent';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/register'} />
        );
      }}
    />
  );
};

const AppLayout = () => {
  return (
    <>
      <AnimatedConent type='BackgroundImageTimeline' timeout={{ enter: 750, exit: 150 }}>
        <BackgroundImage/>
      </AnimatedConent>
      {/* <Layout className='layout layout-stretched'>
        <Router>
          <Route path='/register' component={RegisterForm} />
          <PrivateRoute path='/' component={MessangerContent} />
          <PrivateRoute path='/messanger' component={MessangerContent} />
        </Router>
      </Layout> */}
    </>
  );
};

export { AppLayout };
