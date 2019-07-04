import React from "react";
import ReactDOM from "react-dom";

// A general rule of thumb for class vs function based components
// - Functional components are good for simple content
//   ^ Components without a lot of logic
// - Class components are good for pretty much every thing else

// Benefits of class based components
// - Easier code organization
// - Can use React's state system making it easier to handle user input
// - Understand lifecycle events

// Rules of class components
// - Must be a JavaScript class
// - Must extend React.Component
// Must define a 'render' function that returns some amount of JSX

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));