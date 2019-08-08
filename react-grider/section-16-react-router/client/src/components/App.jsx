import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

// React Router does not care about the entire route. It only cares about the stuff that comes after the domain and port / TLD definition
// The BrowserRouter component creates a behind the scenes history object that looks at our URL and keeps track of the browsers address bar
// ^ BrowserRouter then listens to the history object for changes to the URL
// In a React Router application we can very easily have multiple Route components that match a URL, and show all the associated components to the user
// The code that React Router uses to match routes can essentially be seen as the following: `extractedPath.contains(path)`
// ^ This results in routes being matched if they are contained within the extracted path string, which can result in many routes being matched such as '/' being matched if the extracted path is '/posts'
// ^ In order to override this behavior we can add the exact prop to our Route components. This results in the behavior of React Route being `extractedPath === path`
// When navigating with React Route we do *NOT* want to navigate using anchor (<a></a>) tags
// ^ Instead of using anchor tags we should instead use Link tags (component supplied by React Router)
//    ^ Rather than using the 'href' property as seen on anchor tags, we instead use the 'to' property
// Using the Link tag, React Router automatically prevents the browser from navigating to the new page and fetching a new index.html file
// React Router has three different types of routers available
// ^ The only difference between the three are the part of the URL they look at when deciding where to route the user
//    ^ The BrowserRouter uses everything after the Top Level Domain (TLD, ie .com or .net), or port as the path
//    ^ The HashRouter uses everything after a # as the path
//      ^ With the HashRouter, React Router automatically puts a hash after the TLD / domain / port.
//      ^ With the Hash router we force the server to make a request to the root address of our server (ie localhost) therefore forcing the server to return our index.html
//      ^ By default, the server is not supposed to use /#/ routes. Those routes are specifically for use by the client
//    ^ The MemoryRouter does not use the URL to track navigation. Navigation remains unchanged, however the route in the browser does not update as we switch pages
// ^ The reason for these difference routers is that BrowserRouter is the most difficult to deploy in a realistic setting.
//    ^ However BrowserRoute becomes easy to deploy because a lot of deployment services already understand that we are going to be using something like browser router

// We can have components that are always visible, regardless of route, by placing them inside of our BrowserRouter component and not associating the components with a Route component

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          {/* Its worth noting that adding the exact prop below is the same as writing exact={true} */}
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
