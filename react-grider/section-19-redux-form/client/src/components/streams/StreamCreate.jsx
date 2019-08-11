import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';  

class StreamCreate extends Component {
  renderError = ({touched, error}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // Redux-Form passes in arguments to the functions passed to the Field components component prop
  // We can access the meta object to gain access to helpful information such as error messages on our inputs
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        {/* The below syntax takes the fromProps input property and adds all of the its key value pairs as props to the input element */}
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  // When using redux-form, our onSubmit event handler will be called with whatever values existed within our form when it was submitted
  onSubmit(formValues) {
    // NOOP
  }

  render() {
    return (
      // When using redux-form we call handleSubmit when handling form submission and pass it our onSubmit helper function
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        {/* In order to tell the Field component how to render a text input we have to pass it the component prop (which takes a react component or function to call) */}
        <Field name="title" component={this.renderInput}  label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Create Stream</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // The property on the errors object must be the same as our Field component name prop
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  // Returning an empty object signals to redux-form that everything was enter correctly in the form
  return errors;
}

// The reduxForm call uses similar syntax to the connect method from redux
// As an argument to the reduxFrom call we can pass a configuration object
// ^ here we pass a name key of our form and a validation function for validating form input values
export default reduxForm({
  form: 'reduxForm',
  validate
})(StreamCreate);