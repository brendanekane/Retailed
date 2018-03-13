import React from 'react';
import { withRouter } from 'react-router-dom';


class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <h2>product show page</h2>
    );
  }
}

export default withRouter(Product);
