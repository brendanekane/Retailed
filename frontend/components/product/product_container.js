import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from 'components/product/product';
import { getProduct } from 'actions/product_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  debugger
  return ({
    product: entities.products[ownProps.match.params.productId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getProduct: productId => dispatch(getProduct(productId))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product));
