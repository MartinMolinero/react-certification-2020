import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/dateUtils';

const VideoItem = ({ video }) => {
  const history = useHistory();

  const redirectToVideoDetailPage = (videoId) => {
    history.push(`video/${videoId}`);
  };
  const videoInfo = {
    ...video.id,
    ...video.snippet,
  };
  return (
    <Col>
      <Card>
        <Card.Img
          onClick={() => redirectToVideoDetailPage(videoInfo.videoId)}
          variant="top"
          src={videoInfo.thumbnails.default.url}
        />
        <Card.Body>
          <h5>{videoInfo.title}</h5>
          <Card.Text>{videoInfo.channelTitle}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Uploaded: {formatDate(videoInfo.publishedAt)}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default VideoItem;
