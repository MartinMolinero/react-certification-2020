import { storage } from '../../utils/storage';
import {
  findVideo,
  removeVideoFromFavorites,
  removeRepeatedVideos,
} from '../../utils/arrayUtils';
import { ACTIONSENUM } from './videosActions';

export const initialState = {
  videos: [],
  favorites: [],
  search: '',
};

export function NewVideosReducer(state, action) {
  let parsedState = {};
  let videoState = {};
  let favorites = [];
  let foundVideo = {};
  let newVideosArray = [];
  const { type, payload } = action;
  switch (type) {
    case ACTIONSENUM.SEARCH_VIDEOS:
      videoState = { ...state, search: payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case ACTIONSENUM.FETCH_VIDEOS_STATE:
      parsedState = JSON.parse(storage.get('videos'));
      return parsedState;
    case ACTIONSENUM.SET_VIDEOS:
      videoState = { ...state, videos: payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case ACTIONSENUM.CONCAT_VIDEOS:
      newVideosArray = removeRepeatedVideos([...state.videos, ...payload]);
      videoState = { ...state, videos: newVideosArray };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case ACTIONSENUM.SAVE_VIDEO_TO_FAVORITES:
      foundVideo = findVideo(state.videos, payload);
      favorites = [foundVideo, ...((state && state.favorites) || [])];
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case ACTIONSENUM.REMOVE_VIDEO_FROM_FAVORITES:
      favorites = removeVideoFromFavorites(state.favorites, payload);
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    default:
      return state;
  }
}

export default NewVideosReducer;
