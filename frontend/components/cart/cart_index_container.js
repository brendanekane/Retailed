import { connect } from 'react-redux';
import { deleteItem } from 'actions/cart_item_actions';
import CartIndex from 'components/cart/cart_index';

// totalPrice = Object.values(cart).map(product => product.price).reduce((x,y) => x + y, 0);
// totalPrice,
// cartProducts: Object.values(cart),
const mapStateToProps = ({ cart, session }) => {
  debugger
  return ({
    loggedIn: Boolean(session.currentUser)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteItem: id => dispatch(deleteItem(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
