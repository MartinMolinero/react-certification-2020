import { useEffect, useContext, useCallback } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function useSearchVideos() {
  const { search, videos, setVideos } = useContext(VideosContext);

  const fetchQueriedVideos = useCallback(() => {
    console.log('FETCHING Search');
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
  }, [search, fetchQueriedVideos]);

  // useEffect(() => {
  //   fetchQueriedVideos();
  // });

  return videos;
}

export { useSearchVideos };
