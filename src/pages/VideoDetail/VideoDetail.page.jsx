import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HeartItem from '../../components/Heart';
import VideoInformationFragment from '../../components/VideoItem/VideoInformationFragment.styled';
import VideoList from '../../components/VideoList/VideoList.component';
import VideoVisualizer from '../../components/VideoVisualizer';
import { filterLastRelatedVideos, findVideo } from '../../utils/arrayUtils';
import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';
import VideosContext from '../../utils/state/VideosContext';
import { flattenVideoStructure } from '../../utils/videoUtils';

function VideoDetailPage() {
  const { id } = useParams();
  const videos = useRelatedVideos(id);
  const { fetchVideosState } = useContext(VideosContext);
  useEffect(() => {
    fetchVideosState();
  }, [id]);
  const relatedVideos = filterLastRelatedVideos(videos);
  const currentVideo = flattenVideoStructure(findVideo(videos, id));
  return (
    <div>
      <Row>
        <Col md={8}>
          <VideoVisualizer id={id} />
          {currentVideo && (
            <VideoInformationFragment
              redirectToVideoDetailPage={() => {}}
              title={currentVideo.title}
              channelTitle={currentVideo.channelTitle}
              publishedAt={currentVideo.publishedAt}
              videoId={id}
              noPadding
            >
              <HeartItem id={id} />
            </VideoInformationFragment>
          )}
        </Col>
        <Col md={4}>
          <VideoList width={12} videos={relatedVideos} />
        </Col>
      </Row>
    </div>
  );
}

export default VideoDetailPage;
