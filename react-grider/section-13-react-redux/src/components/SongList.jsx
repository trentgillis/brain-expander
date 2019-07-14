import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render () {
    return (
      <div className="ui divided list">{this.renderList()}</div>
    );
  };
}

// By convention the function we use to configure our connect function call is named mapStateToProps
// This takes our state object from our redux store and runs some calculation that causes our state data to show up as props in our component
// mapStateToProps is called with the redux store data as an argument
// This function get called anytime we update our state, the mapStateToProps function is re-run
const mapStateToProps = (state) => {
  // The value returned by mapStateToProps shows up as state within our component
  // ^ this.props in our component will be equal to the object returned below
  // The is also results in the a reference to the dispatch function being passing into the props of our component
  return { songs: state.songs };
}

// The double paren call is due to calling a function returned from a call to a function
// Connect is configured by passing it a function
// The second argument to connect is an object containing our action creators, which get passed to our component in the props object
// ^ By calling our actions creators on the props object setup by the connect function below, the action returned by the action creators gets automatically passed to our reducers
export default connect(mapStateToProps, {
  selectSong
})(SongList);