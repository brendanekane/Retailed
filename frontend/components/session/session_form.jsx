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

  componentDidMount() {
    this.props.clearUserErrors();
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
        this.props.history.push(`/users/myitems`);
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
        <br></br>
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
          className={this.props.errors.length === 0 ? "login-input-email" : "login-input-email-errors"}
          />
        <br/>
        <br/>
        <input type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.update('password')}
          className={this.props.errors.length === 0 ? "login-input-pw" : "login-input-pw-errors"}
          />
        <br/>
        <br/>
        {this.props.errors.length !== 0 ? <div>{this.renderErrors()}</div> : <div></div> }
        <input className="session-submit" type="submit" value= {thisForm} />
        <br/>
        <br/>
      </div>
    );
  }

  render() {
    let otherForm;
    let modalLink;
    if (this.props.formType === 'Log In') {
     modalLink = 'signup'
     otherForm = 'Sign Up';
   } else if (this.props.formType === 'Sign Up') {
     modalLink = 'login'
     otherForm = 'Log In';
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
                   <p className='login-header-link' onClick={  () =>
                     this.props.openModal(modalLink)}>{otherForm}</p>
                     or {this.props.formType} below.
                 </div>
                <br/>
                <br/>
              </div>
              {this.loginForm()}
              <div className="login-form-footer">
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(SessionForm);
