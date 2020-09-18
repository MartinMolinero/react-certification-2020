import React from 'react';
import { useVideos } from '../../utils/hooks/useVideos';

function ExplorePage() {
  const { videos } = useVideos();
  console.log('VIDEOS', videos);

  return <div>Here we have the video list</div>;
}

export default ExplorePage;
