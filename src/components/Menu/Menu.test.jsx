import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from './Menu.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: true,
    logout: jest.fn(),
  }),
}));

jest.mock('react-router', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
describe('MENU', () => {
  it('renders children component if the user is authenticated', () => {
    const renderer = render(<Menu />);
    const button = screen.getByTestId('logout-button');
    userEvent.click(button, { button: 0 });
    renderer.rerender();
  });
});
