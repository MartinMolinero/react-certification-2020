import { useEffect, useState } from 'react';
import youtubeAPI from '../API/youtubeAPI';

function useRelatedVideos(videoId) {
  const [videos, setVideos] = useState([]);

  async function fetchRelatedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        relatedToVideoId: videoId,
        type: 'video',
      },
    });
    setVideos(response.data.items);
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, []);

  return { videos };
}

export { useRelatedVideos };
