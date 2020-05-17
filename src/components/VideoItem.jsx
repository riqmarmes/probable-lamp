import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item-box" onClick={() => onVideoSelect(video)}>
      <img
        className="video-item"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
