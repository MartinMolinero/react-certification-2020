import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { usePopularVideos } from '../../utils/hooks/usePopularVideos';
import VideosContext from '../../providers/Videos/VideosContext';

function ExplorePage() {
  const { fetchVideosState } = useContext(VideosContext);
  const videos = usePopularVideos();
  useEffect(() => {
    fetchVideosState();
  }, []);
  return (
    <Container fluid>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default ExplorePage;
