import { flattenVideoStructure } from './videoUtils';
import videos from './videoDataExample';

describe('Video utils', () => {
  let firstVideo;
  it('returns undefined if no video is present', () => {
    expect(flattenVideoStructure()).toBeFalsy();
  });
  it('returns video flatten structure', () => {
    firstVideo = { ...videos[0] };
    expect(flattenVideoStructure(firstVideo)).toEqual(
      expect.objectContaining({
        kind: expect.any(String),
        videoId: expect.any(String),
        thumbnails: expect.any(Object),
        title: expect.any(String),
      })
    );
  });
});
