import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import VideoList from '../../components/VideoList';
import { useSearchVideos } from '../../utils/hooks/useSearchVideos';

function SearchResultsPage() {
  const location = useLocation();
  const search = location.search.split('?query=')[1];
  const videos = useSearchVideos(search);
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
