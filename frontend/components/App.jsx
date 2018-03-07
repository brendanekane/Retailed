import React from 'react';
import GreetingContainer from 'components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from 'components/session/login_form_container';
import SignupFormContainer from 'components/session/signup_form_container';
import { AuthRoute } from 'util/route_util';
import NavbarContainer from 'components/navbar/navbar_container';

const App = () => (
  <div className="app-hook">
    <div className='nav-bar'>
      <div>search bar</div>
      <h1>Retailed</h1>
      <NavbarContainer />
    </div>
    <GreetingContainer />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;
