import React, { Component } from "react";
import { Route } from "react-router-dom";
import Youtube from "./Youtube";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Youtube} />
        {/* <Route path="/page2" component={Counter} /> */}
      </div>
    );
  }
}

export default App;
