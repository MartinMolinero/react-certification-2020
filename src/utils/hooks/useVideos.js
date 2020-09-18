import { useState, useEffect } from 'react';
import youtubeAPI from '../API/youtubeAPI';

function useVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await youtubeAPI.get('/search', {
        params: {
          q: 'nature',
        },
      });

      setVideos(response.data.items);
    }

    fetchVideos();
  }, []);

  return { videos };
}

export { useVideos };
