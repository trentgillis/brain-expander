import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// We can setup default props by setting values on the default props object <- see below
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;