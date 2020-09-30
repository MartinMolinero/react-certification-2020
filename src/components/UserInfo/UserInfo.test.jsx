import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo.component';
import AuthProvider from '../../providers/Auth';

describe('USER INFO', () => {
  it('doesnt render the component when the user is not authenticated', () => {
    render(
      <AuthProvider>
        <UserInfo />
      </AuthProvider>
    );
    expect(screen.getByTestId('unauthenticated-user')).toBeInTheDocument();
  });
});
