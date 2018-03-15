import { connect } from 'react-redux';
import { deleteItem, getItems } from 'actions/cart_item_actions';
import CartIndex from 'components/cart/cart_index';
import { getProducts, updateProduct } from 'actions/product_actions';
import { updateUser } from 'actions/user_actions';

const mapStateToProps = (state) => {
  const cart = state.entities.cart
  let totalPrice = Object.values(cart).map(product => product.price).reduce((x,y) => x + y, 0);
  return ({
    totalPrice,
    totalItems: Object.values(cart).length,
    cartProducts: Object.values(cart),
    loggedIn: Boolean(state.session.currentUser),
    photos: state.entities.photos,
    currentUser: state.session.currentUser,
    transactions: state.session.currentUser.transactions
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteItem: id => dispatch(deleteItem(id)),
    getItems: () => dispatch(getItems()),
    getProducts: () => dispatch(getProducts()),
    updateProduct: product => dispatch(updateProduct(product)),
    updateUser: user => dispatch(updateUser(user))

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
