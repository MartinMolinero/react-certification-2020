import { storage } from '../storage';

const findVideo = (videoList, favoriteId) => {
  return videoList.find((element) => element.id.videoId === favoriteId);
};

const removeVideoFromFavorites = (videoList, favoriteId) => {
  return videoList.filter((element) => element.id.videoId !== favoriteId);
};

const VideosReducer = (state, action) => {
  console.log('dispatching', state, action);
  let parsedState = {};
  let videoState = {};
  let favorites = [];
  let foundVideo = {};
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
    case 'SAVE_VIDEO_TO_FAVORITES':
      console.log('VIDEOS', state.videos);
      foundVideo = findVideo(state.videos, action.payload);
      console.log('FOUND', foundVideo);
      favorites = [foundVideo, ...((state && state.favorites) || [])];
      videoState = { ...state, favorites };
      console.log('new video state', videoState);
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
