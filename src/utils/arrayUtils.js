const { MAX_VIDEOS_TO_FETCH } = require('./constants');

const filterLastRelatedVideos = (array, id) => {
  if (!array) return [];
  const initialIndex = array.length - MAX_VIDEOS_TO_FETCH;
  const finalIndex = array.length;
  const filtered = array
    .slice(initialIndex, finalIndex)
    .filter((video) => video.id.videoId !== id);
  return filtered;
};

const findVideo = (videoList, favoriteId) => {
  if (!videoList || !favoriteId) return false;
  return videoList.find((element) => element.id.videoId === favoriteId);
};

const removeVideoFromFavorites = (videoList, favoriteId) => {
  if (!videoList || !favoriteId) return [];
  return videoList.filter((element) => element.id.videoId !== favoriteId);
};

const removeRepeatedVideos = (videoList) => {
  if (!videoList) return [];
  return videoList.filter(
    (v, i, a) => a.findIndex((t) => t.id.videoId === v.id.videoId) === i
  );
};

export {
  filterLastRelatedVideos,
  findVideo,
  removeVideoFromFavorites,
  removeRepeatedVideos,
};
