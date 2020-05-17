import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Youtube from "./Youtube";
import Header from "./Header";
import WrappedApp from "../counter/WrappedApp";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/counter" component={Youtube} />
        <Route exact path="/" component={WrappedApp} />
      </Fragment>
    );
  }
}

export default App;
