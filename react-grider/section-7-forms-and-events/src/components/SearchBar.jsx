import React from "react";

// Controlled Components:
// When using uncontrolled elements, the only we we can for example obtain an element from an input is through accessing the element on the DOM
// We want to use controlled components becasue they centratlize the application data inside of the React components
// ^ This means at any point in time if we need a value we do not have to reference the DOM but rather already have the information we need inside of our React component
// Key takeaway -> We are storing our data inside of our component rather than in the DOM

class SearchBar extends React.Component {
  // Callback functions that are responding to user interaction recive the event object as a parameter
  // It is standard to name event handlers as the following, "on" followed by the name of the element the callback is used on, "Input", followed by the name of the event we are listening for "Change"
  // Technically, the name of the callback does not matter, however the name of the property on the element does matter, ie onChange must be used on the input element in this case
  // The below is the handler for when we were using an uncontrolled element, see the uncommented code for an example of the smae implementation, except with a controlled element
  // onInputChange(event) {
  //   // We can obtain the value from our input using event.target.value
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  // In order to avoid context issues with "this" we should use arrow functions which bind "this" to whatever "this" is when the function was created, in this case objects created using the SearchBar class
  onSearchSubmit = (event) => {
    // The below code prevents of default behavior of html elements
    event.preventDefault();

    // To gain access to the props object in class based components we use the "this" keyword
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        {/* Another way to avoid breaking the "this" binding, we can pass an arrow function as a prop, i.e. onSubmit={(event) => onFormSubmit(event)} */}
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <label htmlFor="image-search">Image Search</label>
          {/* When passing the onChange prop, we do not add the parens to the method reference because we are passing a reference to our callback function */}
          {/* onChange is a special property name for handling user interaction, specifically whenever the below input changes (user types something in) */}
          {/* Other special properties include onClick (user clicks something) and onSubmit (user submits a form) */}
          {/* Note: Not all event handler properties are available on all elements */}
          {/* Alternitively we can use an arrow function rather than a function reference on our event handlers */}
          {/* <input className="field" id="image-search" type="text" onChange={this.onInputChange} /> <- this is an uncontrolled form element. We prefer controlled elements. See the uncommented code */}
          <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
        </form>
      </div>
    );
  }
}

export default SearchBar;