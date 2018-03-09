import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileMessages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h2>Messages</h2>
    )
  }
}

export default withRouter(ProfileMessages)
