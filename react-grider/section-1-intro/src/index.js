// Import the React and ReactDOM libraries

// Use of the import syntax refers to using the ES2015 module system. Use of the require function refers to using the CommonJS module system.
import React from "react";  // Imports the React library from the node_module directory
import ReactDOM from "react-dom";

// Create a react component

// A react component is a class or function that produces HTML using JSX to display to the user and handles user interaction through the use of event handlers
// The below is a React function component that returns the JSX represent a div containing the text "Hello world!"
const App = () => {
    return <div>Hello world!</div>
};

// Take the react and component and render it in the DOM

// The ReactDOM render function takes a React component written with JSX and renders it to the browser
// The first argument passed to the render function is the component we want to render
// The second argument passed to the render function is a reference to a DOM element already present in our index.html file
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);