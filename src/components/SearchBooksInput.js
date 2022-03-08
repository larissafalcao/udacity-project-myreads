import React, { Component } from "react";

class SearchBooksInput extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    const newValue = event.target.value;
    this.setState({ value: newValue }, () => {
      this.props.onSearch(newValue);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBooksInput;
