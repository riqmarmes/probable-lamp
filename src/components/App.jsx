import React, { Component } from "react";
import { Route } from "react-router-dom";
import Youtube from "./Youtube";
import Header from "./Header";
import WrappedApp from "../counter/WrappedApp";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/counter" component={Youtube} />
        <Route exact path="/" component={WrappedApp} />
      </div>
    );
  }
}

export default App;
