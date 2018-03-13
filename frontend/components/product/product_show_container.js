import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductShow from 'components/product/product_show';
import { getProduct, getProducts } from 'actions/product_actions';


const mapStateToProps = ({session, entities}, ownProps) => {
  return ({
    product: entities.products[ownProps.match.params.productId],
    users: entities.users,
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
)(ProductShow));
