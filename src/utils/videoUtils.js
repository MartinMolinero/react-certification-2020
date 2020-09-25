const flattenVideoStructure = (video) => {
  if (!video) return;
  return {
    ...video.id,
    ...video.snippet,
  };
};

export { flattenVideoStructure };
