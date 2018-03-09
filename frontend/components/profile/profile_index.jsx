import React  from 'react';
import { Link, Route } from 'react-router-dom';


class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.getUserProducts();
  }

  render() {
    return (
      <div>
        <p> MESSAGES (no link yet)</p>
        <Link to='/users/myitems'>MY ITEMS</Link>
        <p> TRANSACTIONS (no link yet)</p>
        <Link to='/users/settings'>SETTINGS</Link>
      </div>
    )
  }
}


export default ProfileIndex;
