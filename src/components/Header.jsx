import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="topnav">
        <Link to="/">Page 1</Link>
        <Link to="/counter">Page 2</Link>
      </div>
    );
  }
}
