import { useEffect, useContext, useCallback } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function useRelatedVideos(videoId) {
  const { videos, concatVideos } = useContext(VideosContext);

  const fetchRelatedVideos = useCallback(async () => {
    console.log('FETCHING Related');
    youtubeAPI
      .get('/search', {
        params: {
          relatedToVideoId: videoId,
          type: 'video',
        },
      })
      .then((response) => {
        concatVideos(response.data.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }, [videoId, concatVideos]);

  useEffect(() => {
    fetchRelatedVideos();
  });
  // useEffect(() => {
  //   fetchRelatedVideos();
  // });

  return videos;
}

export { useRelatedVideos };
