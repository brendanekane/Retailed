import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLoginLinks = (props) => {
  return (
    <div className='nav-bar'>
      <div className='nav-search-bar'>search bar</div>
      <Link to='/' className='navbar-logo'>RETAILED</Link>
      <nav className='login-signup'>
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
      <div className='nav-search-bar'>search bar</div>
      <Link to='/' className='navbar-logo'>RETAILED</Link>
      <div className='nav-right'>
        <Link to='/sell' className='nav-sell-link'>SELL</Link>
        <nav className='nav-profile-link'>
          <Link to={`/users/${currentUser.id}`}>
            <img className='nav-profile-img' src="https://cdn.business2community.com/wp-content/uploads/2013/06/Michael-Scott.png"></img>
          </Link>
          <div className='profile-dropdown'>
            <ul className='profile-dropdown-content'>
              <Link to='/users/messages' className='profile-dropdwon-messages'>MESSAGES</Link>
              <Link to='users/retails'>MY RETAILS</Link>
              <Link to='/users/myitems'>MY ITEMS</Link>
              <Link to='/users/transactions'>TRANSACTIONS</Link>
              <Link to='/users/settings'>SETTINGS</Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
};
// make a classical component componentdidmount currentUser and componentwillreceiveprops pokedex(this.props.history.push(email substring))
// export withRouter...maybeee wait til later (not important enough of a feature)
class NavSessionLinks extends React.Component {
  constructor(props){
    super(props)

  }

  // componentWillReceiveProps(newProps) {
  //   if this.props.currentUser.id !== newProps.currentUser.id
  // }
  render(){
    return(
    this.props.currentUser ? <NavProfileLink currentUser={this.props.currentUser} /> : <NavLoginLinks openModal={this.props.openModal} closeModal={this.props.closeModal}/>

  )
  }
}

export default NavSessionLinks;
