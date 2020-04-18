import React, { useState, useMemo } from 'react';
import { UserContext, UserType } from './UserContext';

const UserContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const value: any = useMemo(() => {
    return {
      setUser: setUser,
      user: user,
    };
  }, [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
