import React, {Component} from "react";
import {connect} from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="header">{user.name}</div>
    );
  }
}

// In some applications, mapStateToProps and the connect setup is extracted into a difference file. 
// ^ Because of this it is a common pattern to extract logic to the mapStateToProps method
// mapStateToProps also gets called with a second argument, ownProps, which is a reference to the props that are being sent into our component
// ^ This gives us access to our components props object
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);