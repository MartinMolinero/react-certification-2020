import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoList from './VideoList.component';
import videosData from '../../utils/videoDataExample';

describe('VideoList', () => {
  let videos;
  beforeEach(() => {
    videos = videosData;
  });
  it('renders the list of video items per each video', () => {
    render(
      <BrowserRouter>
        <VideoList width={12} videos={videos} />
      </BrowserRouter>
    );
    const container = screen.getByTestId('row-videos-container');
    expect(container.childElementCount).toBe(videos.length);
  });

  it('renders no videos found if no videos were provided', () => {
    render(
      <BrowserRouter>
        <VideoList width={8} videos={[]} />
      </BrowserRouter>
    );
    const container = screen.getByTestId('row-videos-container');
    expect(container.childElementCount).toBe(1);
    expect(screen.getByRole('heading').innerHTML).toBe('No videos found');
  });
});
