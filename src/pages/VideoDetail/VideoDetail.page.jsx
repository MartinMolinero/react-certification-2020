import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FavItem from '../../components/Fav';
import VideoList from '../../components/VideoList/VideoList.component';
import VideoVisualizer from '../../components/VideoVisualizer';
import { filterLastRelatedVideos } from '../../utils/arrayUtils';
import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';
import VideosContext from '../../utils/state/VideosContext';

function VideoDetailPage() {
  const { id } = useParams();
  const videos = useRelatedVideos(id);
  const { fetchVideosState } = useContext(VideosContext);
  useEffect(() => {
    fetchVideosState();
  }, [id]);
  const relatedVideos = filterLastRelatedVideos(videos);
  return (
    <div>
      <Row>
        <Col md={8}>
          <VideoVisualizer id={id} />
          <FavItem id={id} />
        </Col>
        <Col md={4}>
          <VideoList width={12} videos={relatedVideos} />
        </Col>
      </Row>
    </div>
  );
}

export default VideoDetailPage;
