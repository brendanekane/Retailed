import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from 'components/product/product';
import { getProduct } from 'actions/product_actions';
import { getOneUser } from 'actions/user_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  return ({
    product: entities.products[ownProps.match.params.productId],
    products: entities.products,
    photos: entities.photos
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProduct: (user_id) => dispatch(getProduct(user_id)),
    getOneUser: id => dispatch(getOneUser(id))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product));
