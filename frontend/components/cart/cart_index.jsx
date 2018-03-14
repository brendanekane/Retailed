import React from 'react';
import { Link } from 'react-router-dom';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/users/myitems')
  }


  render() {
    return (
      <div>Cart Page</div>
    )
  }
}

export default CartIndex;
