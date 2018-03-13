import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductDetail from 'components/product/product_detail';
import { getProduct, getProducts } from 'actions/product_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  const product = entities.products[ownProps.match.params.productId] || {};
  return ({
    product,
    user: entities.users[product.user_id],
    photos: entities.photos
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProducts: () => dispatch(getProducts())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail));
