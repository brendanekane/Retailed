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
          <img className='greeting-user-picture' src='https://cdn.business2community.com/wp-content/uploads/2013/06/Michael-Scott.png' alt='profile picture'></img>
          <div className='greeting-user-info'>
            <h2 className='greeting-user-name'>
              {this.props.currentUser.email.substring(0, this.props.currentUser.email.lastIndexOf("@"))} ({(this.props.currentUser.transactions)})
            </h2>
            <p className='greeting-transactions-full'>{this.props.currentUser.transactions} Transactions</p>
            <br/>
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
