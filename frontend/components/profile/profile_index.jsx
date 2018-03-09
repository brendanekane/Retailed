import React  from 'react';

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
        <p> SETTINGS (no link yet)</p>
      </div>
    )
  }
}


export default ProfileIndex;
