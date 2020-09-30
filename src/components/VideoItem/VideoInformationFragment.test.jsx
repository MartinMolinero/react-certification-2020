import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VideoInformationFragment from './VideoInformationFragment.styled';

describe('VideoInformationFragment', () => {
  it('catches when the user clicks the video title', () => {
    const mockRedirect = jest.fn();
    render(
      <VideoInformationFragment
        title="a title"
        channelTitle="a channel"
        publishedAt="2020-09-26T09:23:11Z"
        videoId="12k0G0K_SG4"
        redirectToVideoDetailPage={mockRedirect}
      />
    );
    const title = screen.getByTestId('video-item-title');
    userEvent.click(title, { button: 0 });
    expect(mockRedirect).toHaveBeenCalled();
  });

  it('renders a fragment without padding', () => {
    const mockRedirect = jest.fn();
    render(
      <VideoInformationFragment
        title="a title"
        channelTitle="a channel"
        publishedAt="2020-09-26T09:23:11Z"
        videoId="12k0G0K_SG4"
        redirectToVideoDetailPage={mockRedirect}
        noPadding
      />
    );
    const container = screen.getByTestId('video-information-container');
    expect(container.style.padding).toEqual('0px');
  });
});
