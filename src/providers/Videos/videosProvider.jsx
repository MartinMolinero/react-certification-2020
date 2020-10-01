import React, { useEffect, useReducer } from 'react';
import { VideosReducer, initialState } from './VideosReducer';
import {
  concatVideosAction,
  removeFavoriteVideoAction,
  saveFavoriteVideoAction,
  searchVideosAction,
  setVideosAction,
} from './videosActions';
import VideosContext from './VideosContext';
import { storage } from '../../utils/storage';

export const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideosReducer, {
    ...initialState,
  });
  const isFavorite = (id) => {
    if (!state || !state.favorites) return false;
    return state.favorites.find((element) => element.id.videoId === id);
  };
  const value = {
    ...state,
    isFavorite,
    setSearchQuery: searchVideosAction(dispatch),
    setVideos: setVideosAction(dispatch),
    concatVideos: concatVideosAction(dispatch),
    // setVideos: useCallback(() => setVideosAction(dispatch), [dispatch]),
    // concatVideos: useCallback(() => concatVideosAction(dispatch), [dispatch]),
    saveFavoriteVideo: saveFavoriteVideoAction(dispatch),
    removeFavoriteVideo: removeFavoriteVideoAction(dispatch),
  };

  useEffect(() => {
    storage.set('videos', JSON.stringify(state));
  }, [state.videos, state.favorites, state.search]);

  return <VideosContext.Provider value={value}> {children}</VideosContext.Provider>;
};
