import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  // When using redux-form, our onSubmit event handler will be called with whatever values existed within our form when it was submitted
  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {createStream})(StreamCreate);