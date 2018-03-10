import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLoginLinks = (props) => {
  return (
    <div className='nav-bar'>
      <div>search bar</div>
      <h2>RETAILED</h2>
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
      <div>search bar</div>
      <h1>RETAILED</h1>
      <nav className='nav-profile-link'>
        <Link to={`/users/${currentUser.id}`}>
          <img className='nav-profile-img' src="https://cdn.business2community.com/wp-content/uploads/2013/06/Michael-Scott.png"></img>
        </Link>
        <div className='profile-dropdown'>
          <ul className='profile-dropdown-content'>
            <li><p>Messages</p></li>
            <li><p>My Retails</p></li>
            <li><p>My Items</p></li>
            <li><p>Transactions</p></li>
            <li><p>Settings</p></li>
          </ul>
        </div>
      </nav>
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
