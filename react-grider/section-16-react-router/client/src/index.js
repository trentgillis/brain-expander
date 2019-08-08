import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Notes about installing React Router
// - react-router is the core navigation library. We do NOT install this manually
// - react-router-dom is the navigation library for dom-based apps (this is what we want)
// - react-router-native is the navigation library for react-native applications
// - react-router-redux is a library that contains a binding between Redux and React Router
// ^ grider recommends not using react-router-redux

ReactDOM.render(<App />, document.querySelector('#root'));