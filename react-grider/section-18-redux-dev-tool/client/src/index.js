import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import App from './components/App';
import reducers from './reducers';

// Notes about installing React Router
// - react-router is the core navigation library. We do NOT install this manually
// - react-router-dom is the navigation library for dom-based apps (this is what we want)
// - react-router-native is the navigation library for react-native applications
// - react-router-redux is a library that contains a binding between Redux and React Router
// ^ grider recommends not using react-router-redux

// The below setup the ability to use the redux developer tools
// we can setup a redux store debug session by changing our URL to the following: localhost:3000?debug_session=<some_string>
// ^ This leads to the persistence of our state and actions across refreshes
// ^ The string query assigned to the debug_session query is the name of the debug session we want to save, and is the name we will use to access that debug session again later
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);