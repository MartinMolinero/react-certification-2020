import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import VideosContext from '../../utils/state/VideosContext';

function FavoritesPage() {
  const { favorites, fetchVideosState } = useContext(VideosContext);
  useEffect(() => {
    fetchVideosState();
  }, []);
  return (
    <Container fluid>
      <Row>
        <VideoList width={12} videos={favorites} />
      </Row>
    </Container>
  );
}

export default FavoritesPage;
