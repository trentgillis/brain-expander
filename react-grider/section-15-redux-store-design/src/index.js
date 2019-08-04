import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// applyMiddleware is what allows us to connect middleware (like thunk) to our Redux store
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App"
import reducers from "./reducers";

// Initialize store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector("#root")
);