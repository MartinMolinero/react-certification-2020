import { storage } from '../../utils/storage';
import {
  findVideo,
  removeVideoFromFavorites,
  removeRepeatedVideos,
} from '../../utils/arrayUtils';
import { ACTIONSENUM } from './videosActions';

export const initialState = JSON.parse(storage.get('videos')) || {
  videos: [],
  favorites: [],
  search: '',
};

export function VideosReducer(state, action) {
  let videoState = {};
  let favorites = [];
  let foundVideo = {};
  let newVideosArray = [];
  const { type, payload } = action;
  switch (type) {
    case ACTIONSENUM.SEARCH_VIDEOS:
      videoState = { ...state, search: payload };
      return videoState;
    case ACTIONSENUM.SET_VIDEOS:
      videoState = { ...state, videos: payload };
      return videoState;
    case ACTIONSENUM.CONCAT_VIDEOS:
      newVideosArray = removeRepeatedVideos([...state.videos, ...payload]);
      videoState = { ...state, videos: newVideosArray };
      return videoState;
    case ACTIONSENUM.SAVE_VIDEO_TO_FAVORITES:
      foundVideo = findVideo(state.videos, payload);
      favorites = [foundVideo, ...((state && state.favorites) || [])];
      videoState = { ...state, favorites };
      return videoState;
    case ACTIONSENUM.REMOVE_VIDEO_FROM_FAVORITES:
      favorites = removeVideoFromFavorites(state.favorites, payload);
      videoState = { ...state, favorites };
      return videoState;
    default:
      return state;
  }
}
