import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const VideoCard = styled(Card)`
  width: 12rem;
  margin-bottom: 0.7rem;
  margin-top: 0.7rem;
`;

const CardImage = styled(Card.Img)`
  height: 8rem;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  font-size: 10pt;
  font-weight: 700;
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

const ChannelContainer = styled.div`
  font-size: 10pt;
  font-weight: 300;
  color: gray;
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const VideoInformationContainer = styled(Card.Body)`
  width: 100%;
`;

export {
  VideoCard,
  CardImage,
  TitleContainer,
  ChannelContainer,
  VideoInformationContainer,
};
