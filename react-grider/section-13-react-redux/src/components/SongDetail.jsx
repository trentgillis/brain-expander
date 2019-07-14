import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  // The key in the key-value pairs returned in mapStateToProps is the key value that will show up on the props object in our component
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);