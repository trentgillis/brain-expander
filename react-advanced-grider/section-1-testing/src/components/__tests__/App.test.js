import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

/**
 * The it function:
 * - NOTE: The it function does not have to be explicitly imported into the file
 * - The it functions purpose it to organize all of our different tests in the same file
 * - The it function takes two arguments
 *    - A string description of the test we are running
 *    - A function containing all of our test logic for when the test runs
 *    - Example:
 *        it(description of the test, function containing our test logic)
 * 
 * - Because React expects to be run in a browser environment, we need the JSDOM library which simulates how the browser behaves
 * 
 */

it('shows a comment box', () => {
  // The reference to document below is a reference to the JSDOM library to create a fake div allowing us to trick react into thinking
  // it is being rendered into an actual browser
  // ^ This 'div' element is not tied to any sort of browser environment
  const div = document.createElement('div');

  // The line of code puts the HTML rendered by app and shoves it into our fake div element
  ReactDOM.render(<App />, div);

  // Here we can add code to look into to fake div element and check if it contains the comment box
  /**
   * The expect function:
   * - The expect function forms what is called an expectation
   * - Any it statement can contain 0 -> largeNumber expectations
   * - The expect function takes a single argument
   *    - The value we are inspecting / the thing we want to verify
   *    - We chain on a matcher statement to our expect call to specify how we want to inspect the subject
   *      ^ Some matchers do not expect to receive an argument, ie .toBeTruthy()
   *    - Example:
   *        expect(value that we are inspecting).matcher_statement(value we expect to see);
   */
  expect(div.innerHTML).toContain('CommentBox Component');

  // The line of code removes the App component from our fake element. This serves as post test clean up to increase the performance of running our tests
  ReactDOM.unmountComponentAtNode(div);
});