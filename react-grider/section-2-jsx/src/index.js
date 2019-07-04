import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click Me!";
  const labelText = "Enter name:";

  return (
    // It is important to note that JSX is not HTML -> Babel converts our JSX along with ant ES6+ code to ES5 code
    // JSX Notes:
    // JSX is a special dialect of JS (it is not HTML!)
    // Browsers do not understand JSX code, we write JSX and then run tools that convert it into normal JS
    // Very similar in form and function to HTML with a couple differences
    // JSX vs HTML notes:
    // Adding custom styling to an element uses different syntax
    // Adding a class to an element uses different syntax
    // JSX can reference JS variables
    <div>
      {/* Whenever we assign a class to a property we need to use className because class is a reserved word in JS */}
      <label htmlFor="name" className="label">{ labelText }</label>
      <input type="text" id="name"/>
      {/* Note the different syntax being used for the style attribute -> we pass a JS object with all of our styles to the element */}
      {/* Also, any CSS attribute that has a dash in it needs to be converted to camel case syntax */}
      {/* In JSX, we have to use double quotes anytime we want to signify a string. By convention, any non JSX property should use single quotes. <- we need to look into the communities decided upon best practices */}
      {/* In React we use {}'s to reference JS variables and functions from within our JSX (known as JSX interpolation) */}
      {/* We cannot render JS objects as text using JSX interpolation */}
      <button style={{backgroundColor: 'blue', color: 'white'}}>{ buttonText }</button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);