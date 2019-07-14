import React from "react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

// When the redux state is updated through the calling of an action creator that passes an action to the reducers, all components connected to redux are re-rendered

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;