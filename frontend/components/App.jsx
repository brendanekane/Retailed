import React from 'react';
import GreetingContainer from 'components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from 'components/session/login_form_container';
import SignupFormContainer from 'components/session/signup_form_container';
import { AuthRoute } from 'util/route_util';

const App = () => (
  <div>
    <h1>Welcome to retailed!</h1>
    <GreetingContainer />
    <AuthRoute path='/login' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;
