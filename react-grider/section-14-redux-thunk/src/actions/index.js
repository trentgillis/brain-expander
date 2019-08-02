import jsonPlaceholder from "../apis/jsonPlaceholder";

// Synchronous action creator -> Instantly returns an action with data ready to do
// Asynchronous action creator -> Takes some amount of time for it to get its data ready to go

// Redux middleware adds a step between the dispatch and Reducers phases of the redux cycle
// ^ Actions are sent through all redux middleware in the cycle

// Middleware in Redux
// - Plain JS function that gets called with every action we dispatch
// - Redux middleware has the ability to stop, modify, or otherwise mess around with actions
// - Tons of open source middleware exist
// - Most popular use of middleware is for dealing with async actions
// - We are going to use a middleware called "redux-thunk" to solve our async issues

// Normal rules for action creators
// - Action creators must return action objects
// - Actions must have a type property
// - Actions can optionally have a payload property

// Action creator rules with Redux Thunk
// - Action creators can return action objects - OR - Action creators can return functions
// ^ If an action object gets returned it must have type property
// ^ If an action object gets returned it can optionally have a payload
// ^ If we return a function, Redux Thunk will automatically call that function for us (thats all Redux Thunk does for us, cool huh? :D)

export const fetchPosts = () => {
  // Redux Thunk allows us to return functions from out action creators, and is passed two arguments by default
  // 1. dispatch: allows us to manually dispatch our actions to our reducers
  // 2. getState: allows us to get our current redux state object
  return async dispatch => {
    // Get data from jsonPlacehold API
    const response = await jsonPlaceholder.get("/posts");

    // Using Redux Thunk we have the ability to manually dispatch our actions
    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};