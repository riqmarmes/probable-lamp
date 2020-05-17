import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, idx) => {
    return <VideoItem key={idx} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
