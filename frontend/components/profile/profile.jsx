import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProfileIndexContainer from 'components/profile/profile_index_container';
import ProfileEditFormContainer from 'components/profile/profile_edit_form_container';
import ProfileItemsContainer from 'components/profile/profile_items_container';
import ProfileMessagesContainer from 'components/profile/profile_messages_container';

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
      <div className="profile-container">
        <div className="profile-index-container">
          <ProfileIndexContainer />
          <div>
            <Route path='/users/settings' component={ ProfileEditFormContainer } />
            <Route path='/users/myitems' component={ ProfileItemsContainer } />
            <Route path='/users/messages' component={ ProfileMessagesContainer } />
          </div>
        </div>
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    )
  }
}

export default withRouter(Profile);
