import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function useSearchVideos() {
  const { search, videos, setVideos } = useContext(VideosContext);
  async function fetchQueriedVideos() {
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
  }

  useEffect(() => {
    fetchQueriedVideos();
  }, [search]);

  return videos;
}

export { useSearchVideos };
