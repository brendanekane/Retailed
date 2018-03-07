import React from 'react';
import { Link } from 'react-router-dom';

const NavLoginLinks = () => (
  <nav className='login-signup'>
    <Link to='/login'>LOGIN</Link>/
    <Link to='/signup'>SIGNUP</Link>
  </nav>
);

// Need a button here to go to the User's profile and has a dropdown menu
// for specific links in the profile; Placeholder for now
const NavProfileLink = ({currentUser}) => (
  <nav className='nav-profile-link'>
    <div>Profile</div>
  </nav>
);

const NavSessionLinks = ({currentUser}) => (
  currentUser ? <NavProfileLink currentUser={currentUser} /> : <NavLoginLinks />
);

export default NavSessionLinks;
