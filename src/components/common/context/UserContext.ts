import React from 'react';

type UserType = {
  email: string;
  avatarLink: string;
  role: 'admin' | 'user';
};

const defaultUserContext = {
  setUser: (user: UserType) => {},
  user: {
    email: '',
    avatarLink: '',
    role: '',
  }
}

const UserContext = React.createContext(defaultUserContext);

export { UserContext, defaultUserContext };
export type {UserType};
