import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

describe('NotFoundPage', () => {
  it('Renders the not found section', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('not-found-container')).toBeInTheDocument();
  });

  it('Renders the not found image', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('img').length).toBe(1);
    expect(screen.getByRole('img').getAttribute('src')).toBe('404.gif');
  });
});
