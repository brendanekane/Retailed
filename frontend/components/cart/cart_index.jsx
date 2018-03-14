import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from 'components/cart/cart_items';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getProducts().then(this.props.getItems);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/users/myitems')
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.cartProducts.forEach(product =>{
      const oldCartProductId = product.id
      return(
        product.user_id = this.props.currentUser.id,
        product.id = product.product_id,
        delete product['product_id'],
        this.props.updateProduct(product).then(this.props.deleteItem(oldCartProductId))
      );
    });
    // dispatch action to remove products from cart
    this.props.history.push('/users/myitems');
  }


  render() {
    return (
      <div>
        <div>{this.props.cartProducts.map(product => (
            <ul className='cart-product-items'>
              <CartItems deleteItem={this.props.deleteItem} product={product} photos={this.props.photos}/>
            </ul>
          ))}</div>
        <form onClick={this.handleSubmit}>
          <input type='submit' value='BUY ITEMS'></input>
        </form>
    </div>
    )
  }
}

export default CartIndex;
