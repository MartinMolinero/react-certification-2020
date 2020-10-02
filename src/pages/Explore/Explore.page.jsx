import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { usePopularVideos } from '../../utils/hooks/usePopularVideos';

function ExplorePage() {
  const videos = usePopularVideos();
  return (
    <Container fluid data-testid={'explore-page-container'}>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default ExplorePage;
