import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let otherForm;
    let otherFormLink;
    if (this.props.formType === 'Log In') {
     otherForm = 'Sign Up';
     otherFormLink = '/signup';
   } else if (this.props.formType === 'Sign Up') {
     otherForm = 'Log In';
     otherFormLink = '/login';
   }
    return (
        <div className="login-form-wrapper">
          <div className='login-form-container'>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className='login-form-header'>
                JOIN THE COMMUNITY
                <br/>
                <br/>
                {this.props.formType} or <Link to={otherFormLink}>{otherForm}</Link> below.
                {this.renderErrors()}
                If you don't have an account we will create one for you.
              </div>
              <div className="login-form">
                <br/>
                  <input type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input-email"
                    />
                <br/>
                <br/>
                  <input type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                    className="login-input-pw"
                    />
                <br/>
                <br/>
                <input className="session-submit" type="submit" value= 'Sign Up/Log In' />
                <br/>
                <br/>
              </div>
              <div className="login-form-footer">
                <div>
                  By creating an account, I accept Retailed's Terms of Services and Privacy Policy.
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(SessionForm);
