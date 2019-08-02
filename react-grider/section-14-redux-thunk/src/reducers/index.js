import { combineReducers } from "redux";
import postsReducer from './postsReducers';

// Rules of Reducers
// - Reducers must return any value besides undefined
// - Reducers produce state, or data ti be used inside of your app using only previous state and the action

export default combineReducers({
  posts: postsReducer
});