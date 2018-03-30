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
    const currentUser = this.props.currentUser
    currentUser.transactions += this.props.totalItems
    const formData = new FormData();
    formData.append("user[id]", currentUser.id);
    formData.append("user[transactions]", currentUser.transactions);
    this.props.updateUser(formData)
    this.props.history.push('/users/myitems');
  }

  // else {
  // }

  render() {
    return (
      <div className='cart-wrapper'>
        <div className='cart-products-container'>
          <div className='cart-product-items-container'>
            <h2 className='cart-header'>YOUR CART</h2>
            <div>
            </div>
            {(this.props.cartProducts.length === 0) ?
              <div className='no-cart-items'>No Products In Your Cart</div> :
              <ul className='cart-product-items'> {this.props.cartProducts.map((product, idx) => {
                    return (
                      <CartItems key={`${idx}`} deleteItem={this.props.deleteItem} product={product} photos={this.props.photos}/>
                    )
                  }
                )}
              </ul>
            }
          </div>
          <form className='checkout-button-container' onClick={this.handleSubmit}>
            <input className='checkout-button' type='submit' value='CHECKOUT'></input>
          </form>
        </div>
    </div>
    )
  }
}

export default CartIndex;
