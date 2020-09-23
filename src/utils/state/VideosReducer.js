import { storage } from '../storage';
import { findVideo, removeVideoFromFavorites, removeRepeatedVideos } from '../arrayUtils';

const VideosReducer = (state, action) => {
  // console.log('dispatching', state, action);
  let parsedState = {};
  let videoState = {};
  let favorites = [];
  let foundVideo = {};
  let newVideosArray = [];
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      videoState = { ...state, search: action.payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case 'FETCH_VIDEOS_STATE':
      parsedState = JSON.parse(storage.get('videos'));
      return parsedState;
    case 'SET_VIDEOS':
      videoState = { ...state, videos: action.payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case 'CONCAT_VIDEOS':
      newVideosArray = removeRepeatedVideos([...state.videos, ...action.payload]);
      videoState = { ...state, videos: newVideosArray };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case 'SAVE_VIDEO_TO_FAVORITES':
      foundVideo = findVideo(state.videos, action.payload);
      favorites = [foundVideo, ...((state && state.favorites) || [])];
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case 'REMOVE_VIDEO_FROM_FAVORITES':
      favorites = removeVideoFromFavorites(state.favorites, action.payload);
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    default:
      return state;
  }
};

export default VideosReducer;
