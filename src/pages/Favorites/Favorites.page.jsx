import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import VideosContext from '../../providers/Videos/VideosContext';

function FavoritesPage() {
  const { favorites } = useContext(VideosContext);
  return (
    <Container fluid>
      <Row>
        <VideoList width={12} videos={favorites} />
      </Row>
    </Container>
  );
}

export default FavoritesPage;
