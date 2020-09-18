import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoItem from '../VideoItem';

const VideoList = ({ width, videos, children }) => {
  return (
    <Col md={width} style={{ backgroundColor: 'red' }}>
      <Row style={{ overflow: 'hidden' }}>
        {videos && videos.map((video) => <VideoItem video={video} />)}
        {children}
      </Row>
    </Col>
  );
};

export default VideoList;
