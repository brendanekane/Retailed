import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from 'components/product/product';
import { getProduct, getProducts } from 'actions/product_actions';
import { getOneUser } from 'actions/user_actions';
import { getItems } from 'actions/cart_item_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  return ({
    product: entities.products[ownProps.match.params.productId],
    products: entities.products,
    photos: entities.photos
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProducts: () => dispatch(getProducts()),
    getProduct: (user_id) => dispatch(getProduct(user_id)),
    getOneUser: id => dispatch(getOneUser(id)),
    getItems: () => dispatch(getItems())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product));
