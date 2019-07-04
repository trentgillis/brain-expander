import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {/* We can gain access content passed within the ApprovalCard component
      (including other components) via the children property on the props object */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;