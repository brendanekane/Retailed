import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDetail from 'components/product/product_detail';
import { getProduct, getProducts } from 'actions/product_actions';
import { createItem } from 'actions/cart_item_actions';
import { openModal, closeModal } from 'actions/modal_actions';

const mapStateToProps = ({session, entities}, ownProps) => {
  const product = entities.products[ownProps.match.params.productId] || {};
  return ({
    product,
    user: entities.users[product.user_id],
    photos: entities.photos,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProducts: () => dispatch(getProducts()),
    getProduct: id => dispatch(getProduct(id)),
    createItem: productId => dispatch(createItem(productId)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail));
