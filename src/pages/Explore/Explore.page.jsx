import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { usePopularVideos } from '../../utils/hooks/usePopularVideos';
import VideosContext from '../../utils/state/VideosContext';

function ExplorePage() {
  const videos = usePopularVideos();
  const { dispatch } = useContext(VideosContext);
  useEffect(() => {
    dispatch({ type: 'FETCH_VIDEOS_STATE' });
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
