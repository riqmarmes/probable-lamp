import React, { Fragment } from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  const { description, title } = selectedVideo.snippet;

  return (
    <Fragment>
      <div>
        <iframe
          title={description}
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default VideoDetail;
