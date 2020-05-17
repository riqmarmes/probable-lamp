import React, { Component, Fragment } from "react";
import Searchbar from "./Searchbar";
import VideoModule from "./VideoModule";

// const KEY = "AIzaSyDbVEgYyOth6xmQYgMn9x8ukIUbXLgC8ys";
const KEY = "AIzaSyDwZ7LaY6ZyhYULpeLt93-7D1_9GnPSYlI";
const maxResults = 10;
var query = "";

class Youtube extends Component {
  //* App state
  state = {
    rjson: null,
    videos: [],
    selectedVideo: null,
  };

  submitSearch() {
    fetch(this.generateURL())
      .then((response) => response.json())
      .then((rjson) =>
        this.setState({
          rjson,
          videos: rjson.items,
          selectedVideo: rjson.items[0],
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  generateURL() {
    return `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}&part=snippet&maxResults=${maxResults}`;
  }

  componentDidMount() {
    this.submitSearch();
  }

  onTermSubmit = (term) => {
    console.log(term);
    query = term;
    this.submitSearch();
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <Fragment>
        <Searchbar onTermSubmit={this.onTermSubmit} />
        <VideoModule appState={this.state} onVideoSelect={this.onVideoSelect} />
      </Fragment>
    );
  }
}

export default Youtube;
