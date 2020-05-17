import React, { Component, Fragment } from "react";

export default class Searchbar extends Component {
  state = { term: "" };

  //* User hits enter on search
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  //* Set the value of search bar
  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="active-cyan-4 mb-4">
            <input
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              id="search-bar-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
