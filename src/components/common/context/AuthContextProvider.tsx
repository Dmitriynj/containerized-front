import React, { useState, useMemo } from 'react';
import { AuthContext, UserType } from './AuthContext';

const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const value: any = useMemo(() => {
    return {
      setUser: setUser,
      user: user,
    };
  }, [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
