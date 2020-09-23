import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
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
    dispatch({ type: 'CONCAT_VIDEOS', payload: response.data.items });
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, [videoId]);

  return state.videos;
}

export { useRelatedVideos };
