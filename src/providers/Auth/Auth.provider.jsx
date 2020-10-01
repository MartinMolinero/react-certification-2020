import React, { useState, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(() =>
    JSON.parse(storage.get('user'))
  );

  const login = useCallback(() => {
    setAuthenticatedUser(mockedUser);
    storage.set(AUTH_STORAGE_KEY, true);
    storage.set('user', JSON.stringify(mockedUser));
  }, []);

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set('user', null);
    storage.set('videos', null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated: !!authenticatedUser, authenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
