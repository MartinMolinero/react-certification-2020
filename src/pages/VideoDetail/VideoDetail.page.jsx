import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FavItem from '../../components/Fav';
import VideoList from '../../components/VideoList/VideoList.component';
import VideoVisualizer from '../../components/VideoVisualizer';
import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';

function VideoDetailPage() {
  const { id } = useParams();
  const { videos } = useRelatedVideos(id);
  return (
    <div>
      <Row>
        <Col md={8}>
          <VideoVisualizer id={id} />
          <FavItem id={id} />
        </Col>
        <Col md={4}>
          <VideoList width={12} videos={videos}></VideoList>
        </Col>
      </Row>
    </div>
  );
}

export default VideoDetailPage;
