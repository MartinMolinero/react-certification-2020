import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function usePopularVideos() {
  const { videos, setVideos } = useContext(VideosContext);
  function fetchVideos() {
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
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return videos || [];
}

export { usePopularVideos };
