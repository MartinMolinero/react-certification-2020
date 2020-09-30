import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoItem from '../VideoItem';

const VideoList = ({ width, videos }) => {
  return (
    <Col md={width}>
      <Row style={{ overflow: 'hidden' }} data-testid="row-videos-container">
        {videos && videos.length > 0 ? (
          videos.map((video) => <VideoItem key={video.id.videoId} video={video} />)
        ) : (
          <div>
            <h4>No videos found</h4>
          </div>
        )}
      </Row>
    </Col>
  );
};

export default VideoList;
