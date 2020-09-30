import React from 'react';
import { render } from '@testing-library/react';
import VideoVisualizer from './VideoVisualizer.component';

describe('VideoVisualizer', () => {
  it('renders the video visualizer iframe', () => {
    const videoId = '12k0G0K_SG4';
    const renders = render(<VideoVisualizer id={videoId} />);
    const videoFrame = renders.getByTestId('video-frame');
    expect(videoFrame).toBeTruthy();
    expect(videoFrame.getAttributeNode('src')).toBeTruthy();
    expect(videoFrame.getAttribute('src')).toEqual(
      `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`
    );
    expect(videoFrame.getAttribute('width')).toEqual('100%');
    expect(videoFrame.getAttribute('height')).toEqual('400');
    expect(videoFrame.getAttribute('allow')).toEqual(
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    expect(videoFrame.getAttribute('frameBorder')).toEqual('0');
  });

  it('doesnt render the iframe if no videoId was defined', () => {
    const renders = render(<VideoVisualizer id={null} />);
    const videoFrame = renders.queryAllByTestId('video-frame');
    expect(videoFrame).toEqual([]);
  });
});
