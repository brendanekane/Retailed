import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    this.props.getProduct(this.props.match.params.productId);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createItem(this.props.product.id);
      this.props.history.push('/cart');
    }
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
          <form onSubmit={this.handleClick}>
            <input type='submit' className='buy-product-button' value='PURCHASE'></input>
          </form>
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
