import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { formatDate } from '../../utils/dateUtils';
import FavItem from '../Fav';

const VideoItem = ({ video }) => {
  const history = useHistory();
  const location = useLocation();

  const redirectToVideoDetailPage = (videoId) => {
    history.push(`/video/${videoId}`);
  };

  const videoInfo = {
    ...video.id,
    ...video.snippet,
  };

  const isOnFavoritesPage = () => {
    return location.pathname === '/favorites';
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
          {isOnFavoritesPage() && <FavItem id={videoInfo.videoId} />}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default VideoItem;
