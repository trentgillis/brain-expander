import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/**
 * The things we get from create-react-app
 * - React: The React library
 * - Webpack: Links together JS files
 * - Babel: Turns ES6+ and JSX into ES5 code
 * - Jest: Automated test runner
 */

/**
 * When we run 'npm test'...
 * - The Jest test runner starts up
 * - Jest finds all files ending in .test.js and executes the tests inside them
 * - Jest prints out the test results in the terminal
 * - Jest waits for a file to change and then runs all tests again
 */

 /**
  * Jest will load all test files in any __test__ directory or any file with a .test.js or .spec.js extension
  */

 ReactDOM.render(<App />, document.querySelector('#root'));
