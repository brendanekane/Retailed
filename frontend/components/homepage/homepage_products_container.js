import { connect } from 'react-redux';
import HomepageProducts from 'components/homepage/homepage_products';
import { getProducts } from 'actions/product_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    users: Object.values(entities.users),
    products: Object.values(entities.products)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getProducts: () => dispatch(getProducts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageProducts);
