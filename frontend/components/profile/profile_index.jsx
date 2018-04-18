import React  from 'react';
import { Link, Route } from 'react-router-dom';


const ProfileIndex = () => {
  return (
    <div className='profile-index-items'>
      <Link to='/users/myitems' className='profile-index-item'>MY ITEMS</Link>
      <Link to='/users/settings' className='profile-index-settings'>SETTINGS</Link>
    </div>
  )
}

// Removed from above settings until feature is implemented
// <Link to='/users/transactions' className='profile-index-transactions'>TRANSACTIONS</Link>

// Removed from about transactions until feature is implemented
// NOTE stylesheets gonna get fucked up when you reimplement, gonna have
// to fix when you do.
// <Link to='/users/messages' className='profile-index-messages'>MESSAGES</Link>


export default ProfileIndex;
