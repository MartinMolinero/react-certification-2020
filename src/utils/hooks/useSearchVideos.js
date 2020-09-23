import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function useSearchVideos() {
  const { state, dispatch } = useContext(VideosContext);
  async function fetchQueriedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: state.search,
      },
    });
    dispatch({ type: 'SET_VIDEOS', payload: response.data.items });
  }

  useEffect(() => {
    fetchQueriedVideos();
  }, [state.search]);

  return (state && state.videos) || [];
}

export { useSearchVideos };
