import React, { useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';
import VideosContext from '../../utils/state/VideosContext';

const Red = styled.div`
  color: red;
`;

const FavItem = ({ id }) => {
  const { state, dispatch } = useContext(VideosContext);

  const saveFavoriteVideo = () => {
    dispatch({ type: 'SAVE_VIDEO_TO_FAVORITES', payload: id });
  };

  const removeFavoriteVideo = () => {
    dispatch({ type: 'REMOVE_VIDEO_FROM_FAVORITES', payload: id });
  };

  const isFavorite = () => {
    return ((state && state.favorites) || []).find((element) => element === id);
  };

  return (
    <div>
      {isFavorite() ? (
        <Red>
          <FavoriteIcon onClick={removeFavoriteVideo} />
        </Red>
      ) : (
        <Red>
          <FavoriteBorderIcon onClick={saveFavoriteVideo} />
        </Red>
      )}
    </div>
  );
};

export default FavItem;
