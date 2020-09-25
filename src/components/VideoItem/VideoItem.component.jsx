import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import HeartItem from '../Heart';
import VideoInformationFragment from './VideoInformationFragment.styled';
import { VideoCard, CardImage } from './VideoAtoms.styled';
import { flattenVideoStructure } from '../../utils/videoUtils';

const VideoItem = ({ video }) => {
  const history = useHistory();
  const location = useLocation();

  const redirectToVideoDetailPage = (videoId) => {
    history.push(`/video/${videoId}`);
  };

  const videoInfo = flattenVideoStructure(video);

  const isOnFavoritesPage = () => {
    return location.pathname === '/favorites';
  };

  return (
    <Col>
      <VideoCard>
        <CardImage
          onClick={() => redirectToVideoDetailPage(videoInfo.videoId)}
          variant="top"
          src={videoInfo.thumbnails.high.url}
        />
        <VideoInformationFragment
          redirectToVideoDetailPage={redirectToVideoDetailPage}
          title={videoInfo.title}
          channelTitle={videoInfo.channelTitle}
          publishedAt={videoInfo.publishedAt}
          videoId={videoInfo.videoId}
        >
          {isOnFavoritesPage() && <HeartItem id={videoInfo.videoId} />}
        </VideoInformationFragment>
      </VideoCard>
    </Col>
  );
};

export default VideoItem;
