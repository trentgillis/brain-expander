import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

/**
 * The are various different hooks available to us through the hooks system in React
 * - userState: allows a functional component to use component level state
 * - useEffect: allows a function component to use 'lifecycle methods'
 * - userContext: allows a functional component to use the context system
 * - userRef: allows a component to use the ref system
 * - useReducer: allows a functional component to store data through a reducer 
 */

const App = () => {
  // The below line is an example of array destructuring
  // ^ Array destructuring allows us to assign variables to the corresponding indexes of the array
  // ie: below resource = useState[0] and setResource = useState[1]
  /**
   * const [currentValue, setCurrentValue] = useState(initialValue)
   * - currentValue contains the present value of this piece of state
   *  ^ same as this.state.resource
   * - setCurrentValue contains a function to call when we want to update our state
   *  ^ same as this.setState({ resource: 'posts' })
   * - useState is a function from react
   * - initial value is the starting value for this piece of state, similar to the initialization of a state object
   *  ^ same as state = { resource: 'posts' }
   * 
   * When using useState we do not have to use an object as the initial value
   * Calling the setCurrentValue method will cause the component to automatically re-render
   *  ^ Remember when we call a method to set the state (ie setState or setResource) we re-render this component and any child components
   */
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <UserList />
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
