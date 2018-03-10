import React  from 'react';
import { Link, Route } from 'react-router-dom';


class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.getUserProducts();
  }

  render() {
    return (
      <div className='profile-index-items'>
        <Link to='/users/myitems' className='profile-index-item'>MY ITEMS</Link>
        <Link to='/users/messages' className='profile-index-messages'>MESSAGES</Link>
        <p className='profile-index-transactions'>TRANSACTIONS</p>
        <Link to='/users/settings' className='profile-index-settings'>SETTINGS</Link>
      </div>
    )
  }
}


export default ProfileIndex;
