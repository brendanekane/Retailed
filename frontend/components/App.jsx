import React from 'react';
import GreetingContainer from 'components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from 'components/session/login_form_container';
import SignupFormContainer from 'components/session/signup_form_container';
import { AuthRoute } from 'util/route_util';
import NavbarContainer from 'components/navbar/navbar_container';
import Modal from 'components/modal';
import ProfileContainer from 'components/profile/profile_container';

// let email = store.getState().session.currentUser.email;
// let user_name = email.substring(0, email.lastIndexOf("@"));

const App = ({store}) => {
  let currentUser = (
    store.getState().session.currentUser === null ? "" : store.getState().session.currentUser.email
  );
  return (
    <div className="app-hook">
      <Modal />
      <NavbarContainer />
      <GreetingContainer />
      <Route path='/users/:id' component={ProfileContainer} />

    </div>
  );
};

export default App;
