import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function usePopularVideos() {
  const { state, dispatch } = useContext(VideosContext);
  async function fetchVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        chart: 'mostPopular',
        regionCode: 'mx',
      },
    });
    dispatch({ type: 'SET_VIDEOS', payload: response.data.items });
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (state && state.videos) || [];
}

export { usePopularVideos };
