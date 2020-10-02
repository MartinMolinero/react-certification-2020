import React from 'react';
import { screen, render } from '@testing-library/react';
import HomePage from './Home.page';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: false,
  }),
}));

describe('HomePage', () => {
  it('Renders no videos found if no videos were provided', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Welcome to the challenge!')).toBeInTheDocument();
    expect(screen.queryAllByTestId('login-link').length).toEqual(1);
  });
});
