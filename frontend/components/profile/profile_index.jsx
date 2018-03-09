import React  from 'react';
import { Link, Route } from 'react-router-dom';


class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.getUserProducts();
  }

  render() {
    return (
      <div className='profile-index-container'>
        <Link to='/users/myitems' className='profile-index-items'>MY ITEMS</Link>
        <Link to='/users/messages' className='profile-index-messages'>MESSAGES</Link>
        <p> TRANSACTIONS (no link yet)</p>
        <Link to='/users/settings' className='profile-index-settings'>SETTINGS</Link>
      </div>
    )
  }
}


export default ProfileIndex;
