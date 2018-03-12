import { connect } from 'react-redux';
import { getUserProducts } from 'actions/product_actions';
import { withRouter } from 'react-router-dom';
import ProfileIndex from 'components/profile/profile_index'

const mapStateToProps = ({session, entities}) => {
  return ({
    currentUser: session.currentUser,
    products: session.currentUser.product_ids
  });
};

const mapDispatchToProps = dispatch => {
  return({
      getUserProducts: (user_id) => dispatch(getUserProducts(user_id)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
