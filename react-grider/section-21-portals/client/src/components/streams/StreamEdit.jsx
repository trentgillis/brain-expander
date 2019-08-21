import React from "react";
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchStream, editStream} from "../../actions";
import StreamForm from './StreamForm';

// With react-router we ALWAYS need to design our components to work in isolation!!!
// ^ Each component should fetch it own data

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  }

  render() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        {/* initialValues is a special prop thats a part of redux-form */}
        <StreamForm 
          initialValues={_.pick(this.props.stream, ['title', 'description'])}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// ownProps is the props object from inside of our component
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);