import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { SubscriptionForm } from '../Auth/SubscriptionForm/SubscriptionForm';
import { MessengerContent } from '../Messenger/MessengerContent/MessengerContent';
import { useAppContext } from '../../common/hooks/UseAppContext/UseAppContext';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { authData } = useAppContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return authData.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/subscribe'} />
          // <Redirect to={'/login'} /> // here should be login
        );
      }}
    />
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Route path='/subscribe' component={SubscriptionForm} />
      <Route path='/messenger1' component={MessengerContent} />
      {/* <PrivateRoute path='/register' component={RegisterForm} /> */}
      {/* <PrivateRoute path='/login' component={}/> */}
      <PrivateRoute path='/' component={MessengerContent} />
      <PrivateRoute path='/messenger' component={MessengerContent} />
    </Router>
  );
};

export { AppRouter };
