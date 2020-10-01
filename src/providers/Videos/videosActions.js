const ACTIONSENUM = {
  SEARCH_VIDEOS: 'SEARCH_VIDEOS',
  SET_VIDEOS: 'SET_VIDEOS',
  CONCAT_VIDEOS: 'CONCAT_VIDEOS',
  SAVE_VIDEO_TO_FAVORITES: 'SAVE_VIDEO_TO_FAVORITES',
  REMOVE_VIDEO_FROM_FAVORITES: 'REMOVE_VIDEO_FROM_FAVORITES',
};

const searchVideosAction = (dispatch) => async (search) => {
  dispatch({ type: ACTIONSENUM.SEARCH_VIDEOS, payload: search });
};

const setVideosAction = (dispatch) => async (videoItems) => {
  dispatch({ type: ACTIONSENUM.SET_VIDEOS, payload: videoItems });
};

const concatVideosAction = (dispatch) => async (videoItems) => {
  dispatch({ type: ACTIONSENUM.CONCAT_VIDEOS, payload: videoItems });
};

const saveFavoriteVideoAction = (dispatch) => async (videoId) => {
  dispatch({ type: ACTIONSENUM.SAVE_VIDEO_TO_FAVORITES, payload: videoId });
};

const removeFavoriteVideoAction = (dispatch) => async (videoId) => {
  dispatch({ type: ACTIONSENUM.REMOVE_VIDEO_FROM_FAVORITES, payload: videoId });
};

export {
  ACTIONSENUM,
  searchVideosAction,
  setVideosAction,
  concatVideosAction,
  saveFavoriteVideoAction,
  removeFavoriteVideoAction,
};
