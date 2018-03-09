import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileItems extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <h2>My Items</h2>
    )
  }
}

export default withRouter(ProfileItems);
