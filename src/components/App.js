import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import { NotificationContainer } from 'react-notifications';
import Login from './Login';
import Chat from './Chat';
import config from '../config';

const App = () => {
  const [user, setUser] = useState(null);
  const renderApp = () => {
    // Render chat component when user state is not null
    if (user) {
      return <Chat user={user} />;
    }

    fetch(`${config.api}/users/1`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });

    return <Login setUser={setUser} />;
  };

  return (
    <div className='container'>
      <h1>api url = {JSON.stringify(process.env)}</h1>
      <NotificationContainer />
      {renderApp()}
    </div>
  );
};

export default App;
