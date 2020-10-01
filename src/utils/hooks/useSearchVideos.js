import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function useSearchVideos() {
  const { search, videos, setVideos } = useContext(VideosContext);
  async function fetchQueriedVideos() {
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
  }

  useEffect(() => {
    fetchQueriedVideos();
  }, [search]);

  // useEffect(() => {
  //   fetchQueriedVideos();
  // });

  return videos;
}

export { useSearchVideos };
