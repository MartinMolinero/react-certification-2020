import React, { useReducer } from 'react';
import VideosReducer, { initialState } from './VideosReducer';
import {
  concatVideosAction,
  fetchVideosStateAction,
  removeFavoriteVideoAction,
  saveFavoriteVideoAction,
  searchVideosAction,
  setVideosAction,
} from './videosActions';
import VideosContext from './VideosContext';

export const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideosReducer, {
    ...initialState,
  });
  const isFavorite = (id) => {
    if (!state.favorites) return false;
    return state.favorites.find((element) => element.id.videoId === id);
  };
  const value = {
    ...state,
    isFavorite,
    setSearchQuery: searchVideosAction(dispatch),
    fetchVideosState: fetchVideosStateAction(dispatch),
    setVideos: setVideosAction(dispatch),
    concatVideos: concatVideosAction(dispatch),
    saveFavoriteVideo: saveFavoriteVideoAction(dispatch),
    removeFavoriteVideo: removeFavoriteVideoAction(dispatch),
  };

  return <VideosContext.Provider value={value}> {children}</VideosContext.Provider>;
};
