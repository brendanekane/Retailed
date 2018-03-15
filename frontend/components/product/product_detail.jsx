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
        <div className= {`show-product-page-${this.props.product.id}`}>
          <p className='product-show-designer'>{this.props.product.designer}</p>
          <br />
          <p className='product-show-name'>{this.props.product.name}</p>
          <br />
          <p>{this.props.product.size}</p>
          <br />
          <p className='product-show-price'>${this.props.product.price}</p>
          <form onSubmit={this.handleClick}>
            <input type='submit' className='buy-product-button' value='PURCHASE'></input>
          </form>
          <br />
          <p className='product-show-description-header'>DESCRIPTION</p>
          <p className='product-show-description'>{this.props.product.description}</p>
          <br />
          <br />
          <div className='product-show-seller-container'>
            <img className='product-show-user-avatar'src={this.props.user.image_url}></img>
            <div className='product-show-seller-description-container'>
              <div className='product-show-seller-name-container'>
                <p className='product-show-seller-name'>{this.props.user.email.substring(0, this.props.user.email.lastIndexOf("@"))}</p>
                <p>({this.props.user.transactions})</p>
              </div>
              <p className='product-show-seller-location'>{this.props.user.location}</p>
              <div className='product-show-seller-weightheight'>
                <p className='product-show-seller-height'>{this.props.user.height} in,</p>
                <p>{this.props.user.weight} lbs.</p>
              </div>
            </div>
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
