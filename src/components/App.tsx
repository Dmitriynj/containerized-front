import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1>api url = {JSON.stringify(process.env)}</h1>
    </div>
  );
};

export {
  App
};
