import React from 'react';

/**
 * Make sure to use a capital C for the below variable.
 * This is because we are trying to render a custom component. If we use a lowercase 'c' React will think we are trying to render a vanilla HTML element
 */
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
};

export default Context;