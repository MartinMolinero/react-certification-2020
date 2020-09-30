import React, { useContext } from 'react';
import VideosContext from '../../providers/Videos/VideosContext';
import { RedFilledHeart, RedBorderHeart } from './Heart.styled';

const HeartItem = ({ id }) => {
  const { saveFavoriteVideo, removeFavoriteVideo, isFavorite } = useContext(
    VideosContext
  );
  return (
    <span>
      {isFavorite(id) ? (
        <RedFilledHeart
          data-testid="red-filled-heart"
          onClick={() => removeFavoriteVideo(id)}
        />
      ) : (
        <RedBorderHeart
          data-testid="red-border-heart"
          onClick={() => saveFavoriteVideo(id)}
        />
      )}
    </span>
  );
};

export default HeartItem;
