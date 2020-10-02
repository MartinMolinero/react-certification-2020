import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: true,
    login: jest.fn(),
  }),
  loginApi: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('LoginPage authenticated', () => {
  it('redirects to /', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.queryAllByTestId('username-field').length).toEqual(0);
    expect(screen.queryAllByTestId('password-field').length).toEqual(0);
  });
});
