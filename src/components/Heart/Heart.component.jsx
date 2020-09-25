import React, { useContext } from 'react';
import VideosContext from '../../utils/state/VideosContext';
import { RedFilledHeart, RedBorderHeart } from './Heart.styled';

const HeartItem = ({ id }) => {
  const { saveFavoriteVideo, removeFavoriteVideo, isFavorite } = useContext(
    VideosContext
  );
  return (
    <span>
      {isFavorite(id) ? (
        <RedFilledHeart onClick={() => removeFavoriteVideo(id)} />
      ) : (
        <RedBorderHeart onClick={() => saveFavoriteVideo(id)} />
      )}
    </span>
  );
};

export default HeartItem;
