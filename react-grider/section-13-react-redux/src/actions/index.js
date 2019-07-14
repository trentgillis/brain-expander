// This file is named index to make importing all of the actions simpler.
// ie. in the top level index.js file we can do an import action from "../actions"
// ^ This works because webpack automatically imports the index file when the import statement points to a directory

// Action creator
export const selectSong = (song) => {
  return {
    // The type property on actions is required, however the payload property is optional
    type: "SONG_SELECTED",
    payload: song
  };
};