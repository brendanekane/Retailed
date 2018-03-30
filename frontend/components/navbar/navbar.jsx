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

//refactor later to have url address be username instead of id
const NavProfileLink = ({currentUser}) => {
  // let email = currentUser.email
  // let user_name = email ? email.substring(0, email.lastIndexOf("@")) : ""
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

// <Link to='users/retails'>MY RETAILS</Link>
// <Link to='/users/messages' className='profile-dropdwon-messages'>MESSAGES</Link>
// removed from profile-dropdown until transactions table implemented
// and buy/sell feature refactored
// NOTE profile-dropdown will shift when you readd this, make sure to
// fix margin in stylesheet to -44 when you reimplement
// <Link to='/users/transactions'>TRANSACTIONS</Link>

// make a classical component componentdidmount currentUser and componentwillreceiveprops pokedex(this.props.history.push(email substring))
// export withRouter...maybeee wait til later when refactoring
class NavSessionLinks extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
    this.props.currentUser ? <NavProfileLink currentUser={this.props.currentUser} /> : <NavLoginLinks openModal={this.props.openModal} closeModal={this.props.closeModal} login={this.props.login}/>

  )
  }
}

export default NavSessionLinks;
