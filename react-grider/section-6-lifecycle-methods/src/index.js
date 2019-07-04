import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Component lifecycle - the lifecycle is as follows
// - The constructor() method is called
// - The render() method is called
// - Content becomes visible on the screen
// - The componentDidMount() method is called
// - We wait for updates the the component
// - After updates the componentDidUpdate() method is called
// - We wait until the component is no longer being shown
// - The componentWillUnmount() method is called

// The constructor function is a good place to do one-time setup
// ^ Best practices say that we should not do any data loading in the constructor
// The render function should only be used to return JSX
// The componentDidMount method is a good place to do any data loading
// The componentDidUpdate method is a good place to do more data loading when state/props change
// The componentWillUnmount method is a good place to do any needed cleanup

// Other rarely used lifecycle methods include - should not be needed until absolutely needed
// - shouldComponentUpdate()
// - getDerivedStateFromProps()
// - getSnapshotBeforeUpdate()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, errorMessage: ""};
  }

  // We can initialize state both in the constructor as well as outside of the constructor. (see below)
  state = {
    lat: null,
    errorMessage: ""
  };

  // This lifecycle method is called after the initial content is rendered to the screen
  componentDidMount() {
    console.log("My component was rendered to the screen!");

    // Get users latitude
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  // This lifecycle method is called after any updates to the component
  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  // Conditionally render content depending on components errorMessage and lat state
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <SeasonDisplay lat={this.state.lat}/>
      );
    }

    return (
      <Spinner/>
    );
  }

  // We want to try hard to avoid multiple return statements in the render method
  // The render method should always just return some JSX, no logic, work, ect
  render() {
    return (
      <div className="border red">
        {/*  */}
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));