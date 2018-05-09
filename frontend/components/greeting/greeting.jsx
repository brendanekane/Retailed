import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div className='greeting-container'>
        <img className='greeting-user-picture' src={props.currentUser.image_url} alt='profile picture'></img>
        <div className='greeting-user-info-container'>
          <div className='greeting-user-info'>
            <h2 className='greeting-user-name'>
              {props.currentUserName} ({props.transactions})
            </h2>
            <div className='greeting-sub-info'>
              <p className='greeting-transactions-full'>{props.transactions} Transactions</p>
              <p className='greeting-feedback'>No feedback yet</p>
              <p className='greeting-location'>{props.location}</p>
              <p className='greeting-dimensions'>{props.height}''  {props.weight} lbs</p>
            </div>
          </div>
          <Link to="/users/settings" className='greeting-edit-link'>EDIT </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
};

export default Greeting;
