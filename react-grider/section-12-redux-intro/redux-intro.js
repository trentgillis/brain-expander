// The following code if from a codepen used to go through the basics of redux and how it is used to manage state
// codepen link: https://codepen.io/anon/pen/ZdZzra?editors=0010

console.clear();

// People dropping off a form (Action Creator)
const createPolicy = (name, amount) => {
  // Return the form (action in the analogy) 
  return {
     // Convention is to have all upper case underscore separated strings for the action type
     type: "CREATE_POLICY",
     payload: {
       name: name,
       amount: amount
     }
   };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Departments (Reducers)
// Reducers always take two arguements in the same order. An existing set of data as the first argument and an action as the second argument
// We need to make sure that the existing data property has a default value in the case that the reducer is being called for the first time
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // We care about his action
    // Anytime we want to change an array inside of a reducer we want to return a brand new array
    return [...oldListOfClaims, action.payload];
  }
  
  // We don't care about this action
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

// A store in redux is the assembly of collection of different reducers and action creators

const { createStore, combineReducers } = Redux;

// To wire together our reducers we use the combine reducers function
const ourDepartments = combineReducers({
  // The key names become the properties on our Redux state object
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// createStore creates a new redux store taking in our reducers as an argument
const store = createStore(ourDepartments);

// Form receiver (dispatch)
// Dispatch sends an action to all of our reducers
// Each call to dispatch runs a Redux cycle
// We can only modify the state object through the use of the dispatch function and the action creators/actions
// ^ We cannot manually reach into the store and modify the state
store.dispatch(createPolicy("Alex", 20));

// The stores getState method gives us access to the global state object managed by Redux
console.log(store.getState());