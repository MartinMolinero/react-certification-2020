import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import VideoItem from './VideoItem.component';
import videos from '../../utils/videoDataExample';

describe('VideoItem', () => {
  it('catches when the user clicks the video image', () => {
    const a = render(
      <BrowserRouter>
        <VideoItem video={videos[0]} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByTestId('video-card-image'), { button: 0 });
    a.rerender();
    expect(screen.queryAllByTestId('video-card-image')).toEqual([]);
  });
});
