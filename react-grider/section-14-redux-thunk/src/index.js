import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// applyMiddleware is what allows us to connect middleware (like thunk) to our Redux store
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App"
import reducers from "./reducers";

// The redux-thunk library is middleware to help us make requests in redux

// Loading Data from an API with Redux FLOW
// - Component gets rendered to the screen
// - Component's "componentDidMount" lifecycle method gets called
// - We call an action creator from "componentDidMount"
// - The action creator runs code to make an API request
// - The API we made the request to responds with data
// - The action creator returns an action with the fetched data on the payload property
// - Some reducer sees the action and return the data from the actions payload
// - Because we generated some new state object, redux/react-redux needs to re-render our application

// Components are generally responsible for fetching data they need by calling an action creator
// Action creators are responsible for making API requests
// ^ This is where redux-thunk comes into play
// We get fetched data in to a component by generating new state in our redux store, then getting that into our component through mapStateToProps

// Here we setup our Redux store and apply the thunk middleware to that store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector("#root")
);