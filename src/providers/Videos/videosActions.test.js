import {
  ACTIONSENUM,
  searchVideosAction,
  setVideosAction,
  concatVideosAction,
  saveFavoriteVideoAction,
  removeFavoriteVideoAction,
} from './videosActions';

describe('VideoActions', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn().mockImplementation((params) => {
      return params;
    });
  });

  it('Search Videos action', () => {
    searchVideosAction(dispatch)('hello');
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONSENUM.SEARCH_VIDEOS,
      payload: 'hello',
    });
  });

  it('Set Videos Action', () => {
    setVideosAction(dispatch)([1, 2, 3]);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONSENUM.SET_VIDEOS,
      payload: [1, 2, 3],
    });
  });

  it('Concat Videos Action', () => {
    concatVideosAction(dispatch)([1, 2]);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONSENUM.CONCAT_VIDEOS,
      payload: [1, 2],
    });
  });

  it('Save Favorite Video', () => {
    saveFavoriteVideoAction(dispatch)([1, 2]);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONSENUM.SAVE_VIDEO_TO_FAVORITES,
      payload: [1, 2],
    });
  });

  it('Remove Favorite Video', () => {
    removeFavoriteVideoAction(dispatch)([1, 2]);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONSENUM.REMOVE_VIDEO_FROM_FAVORITES,
      payload: [1, 2],
    });
  });
});
