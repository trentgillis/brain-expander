import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import streams from '../apis/streams';
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
  // To programatically navigate the user we use the history.push method
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const editStream = (id, formValues) => async dispatch => {
  // PUT requests are requests to update ALL properties of a record
  // ^ In some cases, this leads to the dropping of properties off of the record.
  // ^ This also depends on the implementation of the backend server, a lot of backend have PUT requests function like PATCH request
  // PATCH requests are requests to update SOME properties of a record
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type:
    DELETE_STREAM,
    payload: id
  });
  history.push('/');
};