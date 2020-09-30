import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from './Private.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: true,
  }),
}));
describe('Private Authenticated', () => {
  it('renders children component if the user is authenticated', () => {
    render(
      <BrowserRouter>
        <Private>
          <h1>Hello world</h1>
        </Private>
      </BrowserRouter>
    );
    const heading = screen.getByRole('heading');
    expect(heading.innerHTML).toEqual('Hello world');
  });
});
