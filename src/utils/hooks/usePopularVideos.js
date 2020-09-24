import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function usePopularVideos() {
  const { videos, setVideos } = useContext(VideosContext);
  async function fetchVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        chart: 'mostPopular',
        regionCode: 'mx',
      },
    });
    setVideos(response.data.items);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return videos || [];
}

export { usePopularVideos };
