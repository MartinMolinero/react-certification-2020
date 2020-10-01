import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import VideoList from '../../components/VideoList';
import { useSearchVideos } from '../../utils/hooks/useSearchVideos';

function SearchResultsPage(props) {
  console.log('PROPS', props);
  // const { search } = useContext(VideosContext);
  console.log('SRP');
  const history = useHistory();
  const [search, setSearch] = useState();
  useEffect(() => {
    setSearch(history.location.search.split('?query=')[1]);
  }, [history.location.search]);
  console.log('HISTORY', history);
  console.log(search, 'SEARCH');
  const videos = useSearchVideos();
  return (
    <Container fluid>
      {console.log('SEARCH', search)}
      <h2 data-testid="search-term-container">Search results for {search}</h2>
      <Row>
        <VideoList width={12} videos={videos} />
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
