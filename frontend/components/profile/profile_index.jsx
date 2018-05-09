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


export default ProfileIndex;
