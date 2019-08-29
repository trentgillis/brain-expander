import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

/**
 * The Context system in React allows us to pass information down to ANY child component of a component
 * The context system can be seen as a pipe that information can travel through
 * There are two ways we can get information into the pipe
 *  1. We can setup a default value when our Context object is created
 *  2. We can create a provider object to pass data into the pipe 
 * There are two ways we can get information out of our pipe
 *  1. We can access the this.context property
 *  2. We can make use of a Consumer object
 *    ^ The consumer property is a React component that we can use to get information our of our pipe
 */

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div >
          Select a language
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        {/* Below is how we setup a Provider for our context object. The value props is where we pass the date to update our provider */}
        {/* The Provider property is a component provided to use by the Context system automatically */}
        {/* EVERY TIME we make use of LanguageContext.Provider we create a new SEPARATE pipe of information */}
        {/* Every different use of Provider creates a new separate stream of data being passed down into the components rendered within it */}
        {/* We cal also still render UserCreate on its own without a provider where it will just always use the Context's default value */}
        {/* When adding multiple providers around a single component the order of the providers does not matter */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;