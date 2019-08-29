import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

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
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary">{text}</button>
    );
  }
}

export default Button;