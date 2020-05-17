import React, { ReactNode, useState, useMemo } from 'react';
import {
  AppContext,
  AuthDataType,
  AppContextType,
  defaultAuthData,
} from './AppContext';

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [authData, setAuthData] = useState<AuthDataType>(defaultAuthData);

  const value = useMemo(
    (): AppContextType => ({
      success,
      authData: authData,
      setSuccess: (success: boolean) => setSuccess(success),
      setAuthData: (user: AuthDataType) => setAuthData(user),
    }),
    [success, setSuccess, authData, setAuthData]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
