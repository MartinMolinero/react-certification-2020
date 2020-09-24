import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { useSearchVideos } from '../../utils/hooks/useSearchVideos';
import VideosContext from '../../utils/state/VideosContext';

function SearchResultsPage() {
  const { search, fetchVideosState } = useContext(VideosContext);
  useEffect(() => {
    fetchVideosState();
  }, []);
  const videos = useSearchVideos();
  return (
    <Container fluid>
      <h2>Search results for {search}</h2>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
