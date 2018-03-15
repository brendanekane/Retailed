import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteItem(this.props.product.id);
  }


  render() {
    const product = this.props.product;
    return(
      <li className={`cart-product-item-${product.product_id}`}>
        <Link to={`/products/${product.product_id}`} className={`cart-link-item-${product.product_id}`}>
          <img src={this.props.photos[product.photo_ids[0]].image_url} className={`cart-link-img-${product.product_id}`}></img>
        </Link>
        <br/>
        <div className='cart-product-description-container'>
          <div className='cart-product-designersize-container'>
            <p className='cart-product-designer'>{product.designer}</p>
            <br/>
            <p className='cart-product-size'>{product.size}</p>
          </div>
          <br/>
          <p className='cart-product-name'>{product.name}</p>
          <br/>
          <p className='cart-product-price'>${product.price}</p>
          <br/>
          <br/>
          <form onClick={this.handleDelete}>
            <input type='submit' className={`cart-delete-product-${product.product_id}`} value="REMOVE FROM CART"></input>
          </form>
        </div>
      </li>
    )
  }
}

export default CartItems;
