import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileIndexContainer from 'components/profile/profile_index_container';
import ProfileEditFormContainer from 'components/profile/profile_edit_form_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getUserProducts(1);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
        <ProfileIndexContainer />
        <ProfileEditFormContainer />
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    )
  }
}

export default withRouter(Profile);
