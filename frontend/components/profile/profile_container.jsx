import { connect } from 'react-redux';
import Profile from 'components/profile/profile';
import { getUserProducts, getProduct, createProduct, updateProduct,
          deleteProduct} from 'actions/product_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session, entities }, ownProps) => {
  return ({
  viewedUser: ownProps.match.params.id,
  currentUser: session.currentUser,
  users: entities.users
});
};

const mapDispatchToProps = dispatch => ({
  getUserProducts: () => dispatch(getUserProducts()),
  getProduct: id => dispatch(getProduct(id)),
  createProduct: product => dispatch(createProduct(product)),
  updateProduct: product => dispatch(updateProduct(product)),
  deleteProduct: id => dispatch(deleteProduct(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
