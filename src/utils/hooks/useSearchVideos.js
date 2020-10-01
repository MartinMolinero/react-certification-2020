import { useEffect, useContext, useCallback } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function useSearchVideos(search) {
  const { videos, setVideos } = useContext(VideosContext);

  const fetchQueriedVideos = useCallback(() => {
    youtubeAPI
      .get('/search', {
        params: {
          q: search,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }, [search, setVideos]);

  useEffect(() => {
    fetchQueriedVideos();
  }, [fetchQueriedVideos]);

  return videos;
}

export { useSearchVideos };
