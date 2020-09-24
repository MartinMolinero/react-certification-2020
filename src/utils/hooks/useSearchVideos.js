import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../state/VideosContext';

function useSearchVideos() {
  const { search, videos, setVideos } = useContext(VideosContext);
  async function fetchQueriedVideos() {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: search,
      },
    });
    setVideos(response.data.items);
  }

  useEffect(() => {
    fetchQueriedVideos();
  }, [search]);

  return videos;
}

export { useSearchVideos };
