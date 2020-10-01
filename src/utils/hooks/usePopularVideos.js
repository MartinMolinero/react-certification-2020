import { useEffect, useContext, useCallback } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function usePopularVideos() {
  const { videos, setVideos } = useContext(VideosContext);
  const fetchVideos = useCallback(async () => {
    youtubeAPI
      .get('/search', {
        params: {
          chart: 'mostPopular',
          regionCode: 'mx',
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [setVideos]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return videos || [];
}

export { usePopularVideos };
