import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }


  render() {
    if (this.props.product !== undefined && this.props.user) {
      return (
        <div className= {`show-product-${this.props.product.id}-page`}>
          <p>{this.props.product.designer}</p>
          <br />
          <p>{this.props.product.name}</p>
          <br />
          <p>{this.props.product.size}</p>
          <br />
          <p>{this.props.product.price}</p>
          <br />
          <p>{this.props.product.description}</p>
          <br />
          <br />
          <div>
            <p>{this.props.user.email}</p>
            <p>{this.props.user.transactions}</p>
          </div>
          <p>{this.props.user.location}</p>
          <div>
            <p>{this.props.user.weight}</p>
            <p>{this.props.user.height}</p>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default withRouter(ProductDetail);
