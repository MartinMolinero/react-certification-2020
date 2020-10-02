import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App', () => {
  it('renders app component', () => {
    render(<App />);
    expect(screen.getAllByRole('button').length).toEqual(1);
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getAllByRole('heading').length).toEqual(1);
  });
});
