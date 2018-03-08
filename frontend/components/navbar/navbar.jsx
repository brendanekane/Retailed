import React from 'react';
import { Link } from 'react-router-dom';

const NavLoginLinks = (props) => {
  return (
    <nav className='login-signup'>
      <p className="loginLink" onClick={() => props.openModal('login')}>LOGIN</p>
      <p className="signupLink" onClick={() => props.openModal('signup')}>SIGNUP</p>
    </nav>
  )
};

// Need a button here to go to the User's profile and has a dropdown menu
// for specific links in the profile; Placeholder for now
const NavProfileLink = ({currentUser}) => {
  debugger
  return(
    <nav className='nav-profile-link'>
      Profile
    </nav>
  )
};

const NavSessionLinks = ({currentUser, openModal, closeModal}) => (
  currentUser ? <NavProfileLink currentUser={currentUser} /> : <NavLoginLinks openModal={openModal} closeModal={closeModal}/>
);

export default NavSessionLinks;
