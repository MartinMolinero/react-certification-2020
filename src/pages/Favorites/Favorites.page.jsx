import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import VideosContext from '../../utils/state/VideosContext';

function FavoritesPage() {
  const { state, dispatch } = useContext(VideosContext);
  useEffect(() => {
    dispatch({ type: 'FETCH_VIDEOS_STATE' });
  }, []);
  return (
    <Container fluid>
      <Row>
        <VideoList width={12} videos={state.favorites} />
      </Row>
    </Container>
  );
}

export default FavoritesPage;
