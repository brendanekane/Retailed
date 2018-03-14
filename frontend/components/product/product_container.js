import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from 'components/product/product';
import { getProduct, getProducts } from 'actions/product_actions';
import { getOneUser } from 'actions/user_actions';
import { getItems } from 'actions/cart_item_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  return ({
    product: entities.products[ownProps.match.params.productId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProducts: () => dispatch(getProducts()),
    getOneUser: id => dispatch(getOneUser(id)),
    getItems: () => dispatch(getItems())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product));
