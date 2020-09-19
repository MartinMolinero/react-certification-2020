import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoItem from '../VideoItem';

const VideoList = ({ width, videos }) => {
  return (
    <Col md={width}>
      <Row style={{ overflow: 'hidden' }}>
        {videos &&
          videos.map((video) => <VideoItem key={video.id.videoId} video={video} />)}
      </Row>
    </Col>
  );
};

export default VideoList;
