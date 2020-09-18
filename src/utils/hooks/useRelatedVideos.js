import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function useRelatedVideos(videoId) {
  const { state, dispatch } = useContext(VideosContext);
  async function fetchRelatedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        relatedToVideoId: videoId,
      },
    });
    dispatch({ type: 'SET_VIDEOS', payload: response.data.items });
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, []);

  return (state && state.videos) || [];
}

export { useRelatedVideos };
