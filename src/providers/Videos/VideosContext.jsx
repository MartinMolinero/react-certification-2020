import React from 'react';

const VideosContext = React.createContext({
  state: {
    videos: [],
    favorites: [],
    search: '',
  },
  dispatch: () => {},
});

export default VideosContext;
