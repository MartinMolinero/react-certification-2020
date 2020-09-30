import {
  filterLastRelatedVideos,
  findVideo,
  removeVideoFromFavorites,
  removeRepeatedVideos,
} from './arrayUtils';
import videos from './videoDataExample';

describe('Array utils', () => {
  let videoList;
  beforeEach(() => {
    videoList = videos;
  });

  describe('filterLastRelatedVideos', () => {
    it('returns an empty array if no search array is provided', () => {
      expect(filterLastRelatedVideos(null, null)).toEqual([]);
    });

    it('returns a max length array without the searched id', () => {
      expect(filterLastRelatedVideos(videoList, 'SiDYFCd9SH4').length).toEqual(4);
      expect(filterLastRelatedVideos(videoList, 'SiDYFCd9SH4')).not.toEqual(
        expect.arrayContaining([expect.objectContaining(videos[0])])
      );
    });
  });

  describe('findVideo', () => {
    it('returns false if no video list was provided', () => {
      expect(findVideo(null, 'SiDYFCd9SH4')).toBeFalsy();
    });
    it('returns false if no videoId was provided', () => {
      expect(findVideo(videoList, null)).toBeFalsy();
    });

    it('returns the video the user looked for', () => {
      expect(findVideo(videoList, 'SiDYFCd9SH4')).toEqual(videos[0]);
    });
  });

  describe('removeVideoFromFavorites', () => {
    it('returns false if no video list was provided', () => {
      expect(removeVideoFromFavorites(null, 'SiDYFCd9SH4')).toEqual([]);
    });
    it('returns false if no videoId was provided', () => {
      expect(removeVideoFromFavorites(videoList, null)).toEqual([]);
    });

    it('returns the videos array filtered', () => {
      const expected = [videos[1], videos[2], videos[3], videos[4]];
      expect(removeVideoFromFavorites(videoList, 'SiDYFCd9SH4').length).toEqual(4);
      expect(removeVideoFromFavorites(videoList, 'SiDYFCd9SH4')).toEqual(expected);
    });
  });

  describe('removeRepeatedVideos', () => {
    it('returns false if no video list was provided', () => {
      expect(removeRepeatedVideos(null)).toEqual([]);
    });
    it('returns the videos array filtered', () => {
      const extendedVideos = [
        videos[0],
        videos[1],
        videos[2],
        videos[3],
        videos[4],
        videos[0],
        videos[1],
        videos[2],
        videos[3],
      ];
      expect(removeRepeatedVideos(extendedVideos).length).toEqual(5);
      expect(removeRepeatedVideos(extendedVideos)).toEqual(videoList);
    });
  });
});
