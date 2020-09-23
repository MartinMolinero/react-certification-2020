import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { useSearchVideos } from '../../utils/hooks/useSearchVideos';
import VideosContext from '../../utils/state/VideosContext';

function SearchResultsPage() {
  const { state } = useContext(VideosContext);
  const videos = useSearchVideos();
  return (
    <Container fluid>
      <h2>Search results for {state.search}</h2>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
