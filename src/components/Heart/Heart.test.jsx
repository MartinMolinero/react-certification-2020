import React from 'react';
import { render, screen } from '@testing-library/react';
import Heart from './Heart.component';
import { VideosProvider } from '../../providers/Videos/videosProvider';

describe('Heart', () => {
  /**
   * Couldnt test clicking behavior
   * because of dependencies with
   * provider that I wasnt able to mock
   * :(
   */
  it('renders the component', () => {
    render(
      <VideosProvider>
        <Heart />
      </VideosProvider>
    );
    expect(screen.getByTestId('red-border-heart')).toBeInTheDocument();
  });
});
