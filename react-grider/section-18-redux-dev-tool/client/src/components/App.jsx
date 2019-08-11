import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

/**
 * OAuth Authentication
 * - User authenticates with outside service provider (ie Google, LinkedIn, Facebook)
 * - User authorizes our app to access their information
 * - Outside provider tells us about the user
 * - We are trusting the outside provider to correctly handle identification of a user
 * - Oauth can be user for 
 *  (1) user identification in our app
 *  (2) our app making actions on the user behalf
 * - The list of things that an app wants to do through an OAuth authentication to an outside source is known as the applications list of scopes
 * -  ^ For example in our application we will probably ask for a scope of email, allowing our application to access the users email
 */

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
 