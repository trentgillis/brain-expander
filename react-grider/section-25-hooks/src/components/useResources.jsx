import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResources = resource => {
  const [resources, setResources] = useState([]);

  /**
   * Below is an example of the useEffect hook
   * - As a first argument useEffect takes a function that will be called when the component mounts / updates
   * - As a second argument, useEffect takes as list of argument when the use effect callback will only be called when the values in that list change
   *  ^ If we pass an empty array as a a second argument then that essentially means we are signaling the hook to only run a single time when the component mounts
   * 
   *  In the useEffect hook we CANNOT pass in an async function or a function that returns a promise
   *  ^ When we want to do async actions in the useEffect hook we must use an IIFE or pass in a function defined elsewhere that does what we need
   */
  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};
