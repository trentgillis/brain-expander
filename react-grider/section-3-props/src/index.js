import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
  return (
    <div className="ui container comments">
      {/* By passing the CommentDetail component as a prop to the ApprovalCard component we
       gain access to that component on the props object of the ApprovalCard component */}
      {/* Doing this make the makes it so we can reuse our approval card for multiple
       purposes */}
      <ApprovalCard>
        <CommentDetail
          author="Cooper"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Trent"
          timeAgo="Today at 11:12AM"
          content="Cool perspective! Thanks for sharing!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chris"
          timeAgo="Yesterday at 8:55PM"
          content="Nobody cares...LOL!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector("#root"))