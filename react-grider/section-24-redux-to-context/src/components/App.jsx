import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

/**
 * Grider does not personally recommend replacing Redux with the Context system
 */

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;