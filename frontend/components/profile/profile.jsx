import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProfileIndex from 'components/profile/profile_index';
import ProfileEditFormContainer from 'components/profile/profile_edit_form_container';
import ProfileItemsContainer from 'components/profile/profile_items_container';
import ProfileMessagesContainer from 'components/profile/profile_messages_container';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-index-container">
        <ProfileIndex />
        <div>
          <Route path='/users/settings' component={ ProfileEditFormContainer } />
          <Route path='/users/myitems' component={ ProfileItemsContainer } />
          <Route path='/users/messages' component={ ProfileMessagesContainer } />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Profile);
