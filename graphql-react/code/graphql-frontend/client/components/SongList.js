import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    if (this.props.data.songs) {
      return this.props.data.songs.map(song => {
        return (
          <li>
            {song.title}
          </li>
        );
      });
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSongs()}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

// The below syntax results in immediately running a returned function
export default graphql(query)(SongList);
