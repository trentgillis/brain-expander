import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <ul className="collection">
          {this.renderSongs()}
        </ul>
      );
    } 
  }
}

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

// The below syntax results in immediately running a returned function
export default graphql(query)(SongList);
