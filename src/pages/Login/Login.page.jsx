import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';

import { useAuth, loginApi } from '../../providers/Auth';

import './Login.styles.css';

function LoginPage() {
  const { authenticated, login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function authenticate(event) {
    setError(null);
    event.preventDefault();
    loginApi(username, password)
      .then(() => {
        login();
        history.push('/explore');
      })
      .catch((err) => {
        setError(String(err));
      });
  }

  const handleInputChange = (event) => {
    const data = event.target.value;
    if (event.target.id === 'username') {
      setUsername(data);
      return;
    }
    setPassword(data);
  };

  return authenticated ? (
    <Redirect to="/" />
  ) : (
    <section className="login">
      <h1>Welcome to Videos!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input onChange={handleInputChange} required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input onChange={handleInputChange} required type="password" id="password" />
          </label>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
