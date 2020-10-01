import { VideosReducer, initialState } from './VideosReducer';
import videos from '../../utils/videoDataExample';

describe('VideosReducer', () => {
  let state;
  let action;
  let newState;
  let subArray;
  beforeEach(() => {
    state = initialState;
    action = {};
  });

  it('Searches value', () => {
    action = { type: 'SEARCH_VIDEOS', payload: 'hello' };
    newState = VideosReducer(state, action);
    expect(newState.search).toEqual('hello');
  });

  it('Sets videos', () => {
    subArray = [videos[0], videos[1]];
    action = { type: 'SET_VIDEOS', payload: subArray };
    newState = VideosReducer(state, action);
    expect(newState.videos).toEqual(subArray);
  });

  it('Concats videos', () => {
    state.videos = [videos[0], videos[1]];
    subArray = [...state.videos, videos[2], videos[3]];
    action = { type: 'CONCAT_VIDEOS', payload: [videos[2], videos[3]] };
    newState = VideosReducer(state, action);
    expect(newState.videos).toEqual(subArray);
  });

  it('Saves video to favorites', () => {
    state.videos = [videos[0], videos[1]];
    action = { type: 'SAVE_VIDEO_TO_FAVORITES', payload: videos[1].id.videoId };
    newState = VideosReducer(state, action);
    expect(newState.favorites).toEqual([videos[1]]);
  });

  it('Removes video from favorites', () => {
    state.favorites = [videos[0], videos[1]];
    action = { type: 'REMOVE_VIDEO_FROM_FAVORITES', payload: videos[1].id.videoId };
    newState = VideosReducer(state, action);
    expect(newState.favorites).toEqual([videos[0]]);
  });

  it('Discards action', () => {
    state.favorites = [videos[0], videos[1]];
    action = { type: 'A_DEFAULT_CALL', payload: videos[1].id.videoId };
    newState = VideosReducer(state, action);
    expect(newState).toEqual(state);
  });
});
