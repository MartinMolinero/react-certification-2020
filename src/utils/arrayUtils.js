const { VIDEOS_TO_FETCH } = require('./constants');

const lastXItemsOfArray = (array) => {
  if (!array) return [];
  return array.reverse().slice(0, VIDEOS_TO_FETCH - 1);
};

export default lastXItemsOfArray;
