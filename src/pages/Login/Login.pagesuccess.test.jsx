import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: false,
    login: jest.fn(),
  }),
  loginApi: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('LoginPage', () => {
  it('renders the form component', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('username-field')).toBeInTheDocument();
    expect(screen.getByTestId('password-field')).toBeInTheDocument();
  });

  it('writes inside the fields and click button ', async () => {
    const renderer = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const usernameInput = screen.getByTestId('username-field');
    const passwordInput = screen.getByTestId('password-field');
    const loginButton = screen.getByTestId('login-submit-button');
    await userEvent.type(usernameInput, 'wizeline');
    await userEvent.type(passwordInput, 'Rocks!');
    expect(usernameInput.value).toEqual('wizeline');
    expect(passwordInput.value).toEqual('Rocks!');
    userEvent.click(loginButton, 'login-submit-button');
    renderer.rerender();
    expect(screen.queryAllByTestId('username-field')).toEqual([]);
    expect(screen.queryAllByTestId('password-field')).toEqual([]);
  });
});
