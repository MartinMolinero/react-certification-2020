import React from 'react';
import { render } from '@testing-library/react';
import Heart from './Heart.component';
import { VideosProvider } from '../../providers/Videos/videosProvider';

describe('Heart', () => {
  it('renders the component', () => {
    render(
      <VideosProvider>
        <Heart />
      </VideosProvider>
    );
  });
});
