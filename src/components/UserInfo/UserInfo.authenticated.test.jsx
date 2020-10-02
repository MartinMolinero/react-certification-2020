import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: () => ({
    authenticatedUser: {
      avatarUrl:
        'https://vignette.wikia.nocookie.net/caricaturas/images/b/bd/Smitty_Werben_Man_Jensen.jpg/revision/latest?cb=20111211225840&path-prefix=es',
      name: 'Jagermeister',
    },
  }),
}));
describe('USER INFO authenticated', () => {
  it('renders the component if the user is authenticated', () => {
    render(<UserInfo />);
    const img = screen.getByRole('img');
    const span = screen.getByText('Jagermeister');
    expect(img.getAttribute('src')).toEqual(
      'https://vignette.wikia.nocookie.net/caricaturas/images/b/bd/Smitty_Werben_Man_Jensen.jpg/revision/latest?cb=20111211225840&path-prefix=es'
    );
    expect(span).toBeInTheDocument();
  });
});
