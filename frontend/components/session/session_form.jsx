import React from 'react';
import { withRouter } from 'react-router-dom';

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
    if (this.props.history.location.pathname.includes('/products/')) {
      this.props.processForm(user).then((data) => {
        this.props.closeModal();
      });
    } else {
      this.props.processForm(user).then((data) => {
        this.props.closeModal();
        this.props.history.push(`/users/${data.currentUser.id}`);
      });
    }

  }

  renderErrors() {
    return(
      <ul className="login-form-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }




  loginForm() {
    let thisForm;
    if (this.props.formType === 'Log In') {
     thisForm = 'Log In'
   } else if (this.props.formType === 'Sign Up') {
     thisForm = 'Sign Up'
   }

    return (

      <div className="login-form">
        <br/>
        <input type="email"
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
        <input className="session-submit" type="submit" value= {thisForm} />
        <br/>
        <br/>
      </div>
    );
  }


  renderInputErrors() {
    let thisForm;
    if (this.props.formType === 'Log In') {
     thisForm = 'Log In'
   } else if (this.props.formType === 'Sign Up') {
     thisForm = 'Sign Up'
   }
    if (this.props.errors.length === 0) {
      {return this.loginForm()}
    } else {
      return (
        <div className="login-form">
          <br/>
          <input type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input-email-errors"
            />
          <br/>
          <br/>
          <input type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
            className="login-input-pw-errors"
            />
          <br/>
          <div className='login-form-errors'>{this.renderErrors()}</div>
          <input className="session-submit" type="submit" value= {thisForm} />
          <br/>
          <br/>
        </div>
      )
    }
  }


  render() {
    let otherForm;
    let thisForm;
    let modalLink;
    let otherFormLink;
    if (this.props.formType === 'Log In') {
     thisForm = 'Log In'
     modalLink = 'signup'
     otherForm = 'Sign Up';
     otherFormLink = '/signup';
   } else if (this.props.formType === 'Sign Up') {
     thisForm = 'Sign Up'
     modalLink = 'login'
     otherForm = 'Log In';
     otherFormLink = '/login';
   }
    return (
        <div className="login-form-wrapper">
          <div className='login-form-container'>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className='login-form-header'>
                <h3>JOIN THE COMMUNITY</h3>
                <br/>
                <br/>
                <div>
                  <p className='login-header-link' onClick={  () => this.props.openModal(modalLink)}>{otherForm}</p> or {this.props.formType} below.
                </div>
                <br/>
                <br/>
              </div>
              {this.renderInputErrors()}
              <div className="login-form-footer">
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(SessionForm);
