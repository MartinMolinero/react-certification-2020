import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from './Private.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticated: false,
  }),
}));
describe('Private', () => {
  it('doesnt render children if the user is not authenticated', () => {
    render(
      <BrowserRouter>
        <Private>
          <h1>Hello world</h1>
        </Private>
      </BrowserRouter>
    );
    const heading = screen.queryAllByRole('heading');
    expect(heading).toEqual([]);
  });
});
