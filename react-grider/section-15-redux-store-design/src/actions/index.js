import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// We want to keep action creates as small and compact as possible

// Remember, the second argument to our action creators with thunk is getState which gives us access to the current Redux store's state
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // Whenever we call an action creator from within an action creator we need to ensure that we dispatch the results of calling that inner action creator
  await dispatch(fetchPosts());
  
  // The below returns a new array with all of the unique user ids
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));

  // Below is an alternative compact way to making all of our lodash calls
  // _.chain(getState().posts).map("userId").uniq().forEach(id => dispatch(fetchUser(id))).value();
};

/* Fetches all blog posts */
export const fetchPosts = () =>  async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

/* Fetches a singular user */
// Note: every time we call our action creator, we re-create our inner function as a new version of that function within memory
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// Below is the memoized version of the fetchUser action creator
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });