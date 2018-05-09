import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const guestUser = {email: "michael_scott@gmail.com", password: "office"}

const NavLoginLinks = (props) => {
  return (
    <div className='nav-bar'>
      <div className='nav-search-bar'>search bar placeholder, hidden</div>
      <Link to='/' className='navbar-logo'>RETAILED</Link>
      <nav className='login-signup'>
        <p className="loginLink" onClick={() => props.login(guestUser)}>GUEST</p>
        <p className="loginLink" onClick={() => props.openModal('login')}>LOGIN</p>
        <p className="signupLink" onClick={() => props.openModal('signup')}>SIGNUP</p>
      </nav>
    </div>
  )
};

const NavProfileLink = ({currentUser}) => {

  return(
    <div className='nav-bar'>
      <div className='nav-cart-div'>
        <Link to='/cart' className='nav-cart-link'>CART</Link>
      </div>
      <Link to='/' className='navbar-logo'>RETAILED</Link>
      <div className='nav-right'>
        <Link to='/sell' className='nav-sell-link'>SELL</Link>
        <nav className='nav-profile-link'>
          <Link to={`/users/myitems`}>
            <img className='nav-profile-img' src={currentUser.image_url}></img>
          </Link>
          <div className='profile-dropdown'>
            <ul className='profile-dropdown-content'>
              <Link to='/users/myitems'>MY ITEMS</Link>
              <Link to='/users/settings'>SETTINGS</Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
};


const NavSessionLinks = (props) => {
  return (
    props.currentUser ? <NavProfileLink currentUser={props.currentUser} /> : <NavLoginLinks openModal={props.openModal} closeModal={props.closeModal} login={props.login}/>

  )
}

export default NavSessionLinks;
