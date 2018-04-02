import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.currentUser;
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='greeting-container'>
          <img className='greeting-user-picture' src={this.props.currentUser.image_url} alt='profile picture'></img>
          <div className='greeting-user-info-container'>
            <div className='greeting-user-info'>
              <h2 className='greeting-user-name'>
                {this.props.currentUserName} ({this.props.transactions})
              </h2>
              <div className='greeting-sub-info'>
                <p className='greeting-transactions-full'>{this.props.transactions} Transactions</p>
                <p className='greeting-feedback'>No feedback yet</p>
                <p className='greeting-location'>{this.props.location}</p>
                <p className='greeting-dimensions'>{this.props.height}''  {this.props.weight} lbs</p>
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
  }

}


export default Greeting;
