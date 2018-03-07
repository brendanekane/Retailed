import React from 'react';
import GreetingContainer from 'components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from 'components/session/login_form_container';
import SignupFormContainer from 'components/session/signup_form_container';
import { AuthRoute } from 'util/route_util';
import NavbarContainer from 'components/navbar/navbar_container';
import Modal from 'components/modal';

const App = () => (
  <div className="app-hook">
    <Modal />
    <div className='nav-bar'>
      <div>search bar</div>
      <h2>RETAILED</h2>
      <NavbarContainer />
    </div>
    <GreetingContainer />

  </div>
);

export default App;
