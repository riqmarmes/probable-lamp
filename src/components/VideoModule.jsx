import React, { Component, Fragment } from "react";
import VideoDetail from "./VideoDetail";
import VideosList from "./VideoList";

class VideoModule extends Component {
  render() {
    return (
      <Fragment>
        <div className="column">
          <VideosList
            videos={this.props.appState.videos}
            onVideoSelect={this.props.onVideoSelect}
          />
        </div>

        <div className="column right-column">
          <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
        </div>
      </Fragment>
    );
  }
}

export default VideoModule;
