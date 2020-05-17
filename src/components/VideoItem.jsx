import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
