import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  // Don't forget to use arrow functions to avoid issues with the "this" binding
  onSearchSubmit = async (term) => {
    // We can make API requests in React using either Fetch or the Axios library
    // ^ Axios does a lot of the heavy lifting for us, making it a good choice for making API requests in a React app
    // We use the async / await syntax to handle the asynchronous request elegantly
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* The use of onSubmit on the SearchBar component below is not significant, we could have used any name */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;