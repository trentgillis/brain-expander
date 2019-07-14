// The index.js file sets up both the react and redux parts of the application
// The /actions directory contains all files related to action creators
// The /components directory contains all files related to components
// the /reducers directory contains all files related to our reducers

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";


ReactDOM.render(
  // The top level Provider component is provided by the react-redux library to give our application access to our Redux store
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);