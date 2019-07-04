import React from "react";
import ReactDOM from "react-dom";

// Rules of state in React
// - Only usable with class components
// - Easy to confuse props with state
// - 'State' is a JS object that contains data relevant to a component
// - Updating state on a component causes the component to (almost) instantly rerender
// - State must be initialized when a component is created
// - State can only be updated using the function 'setState'

class App extends React.Component {
  // We can do any initial setup for our component using the constructor function
  // This method is loaded the moment the component is initialized. You already know this lol
  constructor(props) {
    super(props);

    // The below is the initialization of our state
    // This is the only time we do direct assignment to this.state
    this.state = {lat: null, errorMessage: ""};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We change the component state using the setState method
        // Note: We DO NOT want to directly change our state. Always update state this the setState method
        // When component state changes the component re-renders the component
        // ^ For the re-render to occur we must use the setState method.
        // Updating the state directly will result in the re-rendering of the component
        this.setState({lat: position.coords.latitude})
      },
      err => {
        // When we call setState we are only adding or updating properties on our state, not deleting properties
        this.setState({errorMessage: err.message});
      }
    );
  }

  // React says we have to define the render function!!!
  // The render method is called frequently, so we should not have any code that initializes
  // some sort of work from within this method
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>Latitude: {this.state.lat}</div>
      );
    }

    return (
      <div>Loading...</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));