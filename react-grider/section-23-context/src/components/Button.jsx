import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // The below us how we connect a class component to a context, grants access to this.context
  // ! The property name contextType is special and does matter. When hooking up a context we must use the name 'contextType'
  // The static keyword adds a property to the class itself, not just to a particular instance of that class
  // ^ It's equivalent to writing Button.contextType = LanguageContext
  /**
   * From MDN:
     Static method calls are made directly on the class and are not callable on instances of the class. 
     Static methods are often used to create utility functions.
   */
  // static contextType = LanguageContext;
  // ^ When using a consumer we do not have to specify a context type

  /**
   * We will use a context Consumer component anytime we want to access data from multiple contexts objects in a single component
   */

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* Below we are using a Consumer component to gain access to data from our context object */}
        <LanguageContext.Consumer>
          {/* Whenever we place a consumer component we always provide one child to it */}
          {/* ^ the child is always a function that will be automatically called by the consumer with whatever value is currently in our pipe */}
          {value => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton}
      </ColorContext.Consumer>
    );
  }
}

export default Button;