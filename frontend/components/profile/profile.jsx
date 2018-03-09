import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    this.props.getUserProducts(1);
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   if (newProps.currentUser && (newProps.currentUser.id !== this.props.currentUser.id)) {
  //     this.props.history.push(`/${newProps.currentUser.id}`);
  //   }
  // }

  render() {
    return (
      <div>
        <h1>profile render</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default withRouter(Profile);
