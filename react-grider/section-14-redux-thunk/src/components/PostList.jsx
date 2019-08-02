import React, { Component } from "react";
import {connect} from "react-redux";

import {fetchPosts} from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>PostList Component</div>
    );
  }
}

// Remember the second argument is a list of action creators we want passed into the props object on our component
export default connect(null, {fetchPosts})(PostList);