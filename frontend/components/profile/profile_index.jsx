import React  from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileEditFormContainer from 'components/profile/profile_edit_form_container';

class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.getUserProducts();
  }

  render() {
    return (
      <div>
        <p> MESSAGES (no link yet)</p>
        <p> MY ITEMS (no link yet)</p>
        <p> TRANSACTIONS (no link yet)</p>
        <Link to='/users/settings'>SETTINGS</Link>
      </div>
    )
  }
}


export default ProfileIndex;
