import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { useSearchVideos } from '../../utils/hooks/useSearchVideos';
import VideosContext from '../../providers/Videos/VideosContext';

function SearchResultsPage() {
  const { search } = useContext(VideosContext);

  const videos = useSearchVideos();
  return (
    <Container fluid>
      <h2 data-testid="search-term-container">Search results for {search}</h2>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
