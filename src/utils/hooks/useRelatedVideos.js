import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function useRelatedVideos(videoId) {
  const { videos, concatVideos } = useContext(VideosContext);
  async function fetchRelatedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        relatedToVideoId: videoId,
        type: 'video',
      },
    });
    concatVideos(response.data.items);
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, [videoId]);

  return videos;
}

export { useRelatedVideos };
