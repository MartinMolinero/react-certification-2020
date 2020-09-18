import { storage } from '../storage';

// const findVideo = (videoList, favoriteId) => {
//   return videoList.find((element) => element.id === favoriteId);
// };

// const removeVideoFromFavorites = (videoList, favoriteId) => {
//   return videoList.filter((element) => element.id !== favoriteId);
// };

const VideosReducer = (state, action) => {
  console.log('dispatching', state, action);
  let parsedState = {};
  let videoState = {};
  let favorites = [];
  // let foundVideo = {};
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
      // foundVideo = findVideo(state.videos, action.payload);
      favorites = [...((state && state.favorites) || []), action.payload];
      // favorites = [...((state && state.favorites) || []), foundVideo]
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case 'REMOVE_VIDEO_FROM_FAVORITES':
      favorites = state.favorites.filter((fav) => fav !== action.payload);
      // favorites = removeVideoFromFavorites(state.favorites, action.payload);
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    default:
      return state;
  }
};

export default VideosReducer;
