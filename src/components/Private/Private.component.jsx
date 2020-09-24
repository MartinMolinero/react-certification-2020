import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();
  console.log('AUTHENTICATED', authenticated);
  const isAuthenticated = () => {
    return authenticated || Boolean(JSON.parse(storage.get('user')));
  };
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <Redirect to="/" />)}
    />
  );
}

export default Private;
