import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let otherForm;
    let otherFormLink;
    if (this.props.formType === 'Log In') {
      otherForm = 'Sign Up';
      otherFormLink = '/signup';
    }
    else {
      otherForm = 'Log In';
      otherFormLink = '/login';
    }
    if (this.props.currentUser) {
      return(
        <Redirect to="/"/>
      );
    }

    return (
      <form>
        { this.props.errors.session.length ? <h3>{ this.props.errors.session }</h3> : null }
        <h2>{ this.props.formType }</h2>
        <label>Email
          <input type="text" value={ this.state.email } onChange={ this.handleEmail }/>
        </label>
        <label>Password
          <input type="password" value={ this.state.password } onChange={ this.handlePassword }/>
        </label>
        <input type="submit" onClick={ this.handleSubmit } value='Submit'/>
        <Link to={ otherFormLink }>{otherForm}</Link>
      </form>
    );
  }
}

export default withRouter(SessionForm);
