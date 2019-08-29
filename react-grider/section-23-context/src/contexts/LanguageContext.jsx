import React from 'react';

/**
 * We create our contexts inside of different file so we can only make use of our context where it is needed
 * As a first argument we pass in a default value for the context object
 */
 export default React.createContext('english');