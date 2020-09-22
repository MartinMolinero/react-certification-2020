import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import lastXItemsOfArray from '../arrayUtils';
import VideosContext from '../state/VideosContext';

function useRelatedVideos(videoId) {
  const { state, dispatch } = useContext(VideosContext);

  async function fetchRelatedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        relatedToVideoId: videoId,
        type: 'video',
      },
    });
    dispatch({ type: 'SET_VIDEOS', payload: [...state.videos, ...response.data.items] });
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, [videoId]);

  return lastXItemsOfArray(state.videos);
}

export { useRelatedVideos };
