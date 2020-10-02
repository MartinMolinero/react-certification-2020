import React from 'react';
import { screen, render } from '@testing-library/react';
import { VideosProvider } from '../../providers/Videos/videosProvider';
import FavoritesPage from './Favorites.page';

describe('FavoritesPage', () => {
  it('Renders no videos found if no videos were provided', () => {
    render(
      <VideosProvider>
        <FavoritesPage />
      </VideosProvider>
    );
    expect(screen.getByTestId('favorite-videos-container')).toBeInTheDocument();
    expect(screen.getByTestId('row-videos-container')).toBeInTheDocument();
    expect(screen.getByRole('heading').innerHTML).toEqual('No videos found');
  });
});
