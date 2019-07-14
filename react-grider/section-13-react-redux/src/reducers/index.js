// See the comment in the actions directories index.js to see why this file is named index.js

import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Good Things Fall Apart",
      duration: "3:37"
    },
    {
      title: "Pray",
      duration: "4:55"
    },
    {
      title: "Crashing",
      duration: "3:50"
    },
    {
      title: "Take You Down",
      duration: "3:41"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});