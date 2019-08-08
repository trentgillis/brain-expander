// The state argument is whatever was returned from this reducer the last time it ran
export default (state= [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};