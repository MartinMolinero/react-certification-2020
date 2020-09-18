import React from 'react';

const VideoVisualizer = ({ id }) => {
  return (
    <div>
      <section>
        <iframe
          width="100%"
          height="400"
          allowFullScreen
          frameBorder="0"
          title="rick roll"
          src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </section>
    </div>
  );
};

export default VideoVisualizer;
