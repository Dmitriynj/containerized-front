import React from 'react';

type AuthDataType = {
  username: string;
  isAuthenticated: boolean;
};

type AppContextType = {
  success: boolean;
  authData: AuthDataType
  setSuccess: (success: boolean) => void;
  setAuthData: (user: AuthDataType) => void;
};

const defaultAuthData: AuthDataType = {
  username: '',
  isAuthenticated: false,
};

const defaultAppContext: AppContextType = {
  success: false,
  authData: defaultAuthData,
  setSuccess: (success: boolean) => {},
  setAuthData: (user: AuthDataType) => {},
}

const AppContext = React.createContext(defaultAppContext);

export { AppContext, defaultAppContext, defaultAuthData };
export type { AppContextType, AuthDataType };