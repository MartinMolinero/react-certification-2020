import React from 'react';
import {
  TitleContainer,
  ChannelContainer,
  VideoInformationContainer,
} from './VideoAtoms.styled';
import { formatDate } from '../../utils/dateUtils';

const VideoInformationFragment = ({
  title,
  channelTitle,
  publishedAt,
  videoId,
  noPadding,
  redirectToVideoDetailPage,
  children,
}) => {
  console.log('NP', noPadding);
  return (
    <VideoInformationContainer style={{ padding: noPadding ? '0' : '' }}>
      <TitleContainer onClick={() => redirectToVideoDetailPage(videoId)}>
        {title}
      </TitleContainer>
      <ChannelContainer>{channelTitle}</ChannelContainer>
      <small className="text-muted">Uploaded On: {formatDate(publishedAt)}</small>
      {children}
    </VideoInformationContainer>
  );
};

export default VideoInformationFragment;
