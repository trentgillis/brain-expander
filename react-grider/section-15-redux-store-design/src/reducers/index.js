import { combineReducers } from "redux";
import postsReducer from './postsReducers';
import usersReducer from './usersReducer';

// When you first start up a redux application, each reducer is called exactly one time
// ^ This allows us to setup some initial state within our application

// Rules of Reducers
// - Reducers must return any value besides undefined
// - Reducers produce state, or data to be used inside of your app using only previous state and the action
// - Reducers must not reach out of itself to decide what value to return
// ^ When a reducer is called, it is only supposed to look at the current state object and the action it is being passed
// ^ This is know as keeping a reducer 'pure'
// - Reducers must not mutate its input state argument
// ^ Because numbers and strings are immutable, we only have to worry about this rule with arrays and objects
// ^ When using the '===' operator on arrays and objects, js checks if the values are the exact same values in memory, not if they  are two entities with the same value
//    ^ ie numbers = [1,2,3] === [1,2,3] is false
// ^ This rule is misleading because we can mutate our state object freely without error, however it is convention to NOT mutate the state argument
// ^ There is a corner case where mutating the state argument on a reducer will result in unintended behavior
// ^ Because of internal implementation within redux, if we return the same state object / array (modified or not), the equality check in redux will fail and our state will not be updated
// ^ The goal is to manipulate our values without mutating them

// When we default our values in the argument list, the only time we use that default value is the time the reducer is initially called

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});