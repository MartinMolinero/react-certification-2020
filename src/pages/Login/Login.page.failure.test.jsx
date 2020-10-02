import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: false,
    login: jest.fn(),
  }),
  loginApi: jest.fn().mockImplementation(() => Promise.reject()),
}));

describe('LoginPage failure scenario', () => {
  it('writes inside the fields and click button ', async () => {
    act( () => {render(
      <>
        <LoginPage />
      </>
    )});
    
    await act(async() => {
      const usernameInput = screen.getByTestId('username-field');
      const passwordInput = screen.getByTestId('password-field');
      const loginButton = screen.getByTestId('login-submit-button');
      await userEvent.type(usernameInput, 'wizeline');
      await userEvent.type(passwordInput, 'Rocks!');
      expect(usernameInput.value).toEqual('wizeline');
      expect(passwordInput.value).toEqual('Rocks!');
      userEvent.click(loginButton, 'login-submit-button')
    });
  });
});
