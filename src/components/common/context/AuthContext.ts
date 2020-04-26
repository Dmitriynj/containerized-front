import React from 'react';

type UserType = {
  username: string;
  isAuthenticated: boolean;
};

const defaultAuthContext = {
  setUser: (user: UserType) => {},
  user: {
    username: '',
    isAuthenticated: false,
  }
}

const AuthContext = React.createContext(defaultAuthContext);

export { AuthContext, defaultAuthContext };
export type {UserType};