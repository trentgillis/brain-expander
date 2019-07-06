import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchSubmit = (event) => {
    // The below code prevents of default behavior of html elements
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <label htmlFor="image-search">Image Search</label>
          <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
        </form>
      </div>
    );
  }
}

export default SearchBar;