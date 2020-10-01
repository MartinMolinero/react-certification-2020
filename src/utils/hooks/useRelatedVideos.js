import { useEffect, useContext } from 'react';
import youtubeAPI from '../API/youtubeAPI';
import VideosContext from '../../providers/Videos/VideosContext';

function useRelatedVideos(videoId) {
  const { videos, concatVideos } = useContext(VideosContext);

  useEffect(
    function fetchRelatedVideos() {
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
    },
    [videoId, concatVideos]
  );

  return videos;
}

export { useRelatedVideos };
