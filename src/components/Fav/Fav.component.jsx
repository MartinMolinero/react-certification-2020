import React, { useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';
import VideosContext from '../../utils/state/VideosContext';

const Red = styled.div`
  color: red;
`;

const FavItem = ({ id }) => {
  const { saveFavoriteVideo, removeFavoriteVideo, isFavorite } = useContext(
    VideosContext
  );
  return (
    <div>
      {isFavorite(id) ? (
        <Red>
          <FavoriteIcon onClick={() => removeFavoriteVideo(id)} />
        </Red>
      ) : (
        <Red>
          <FavoriteBorderIcon onClick={() => saveFavoriteVideo(id)} />
        </Red>
      )}
    </div>
  );
};

export default FavItem;
