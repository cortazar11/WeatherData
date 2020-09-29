import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class SearchBar extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label htmlFor="city">{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" id="city" autoFocus />
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.fetchPosts(formValues.term);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="term"
          component={this.renderInput}
          label="ENTER FOR WHICH CITY YOU WANT WEATHER DATA"
        />
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: 'search',
})(SearchBar);

export default connect(null, { fetchPosts })(formWrapped);
