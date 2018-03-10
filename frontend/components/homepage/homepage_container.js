import { connect } from 'react-redux';
import Homepage from 'components/homepage/homepage';
import { getProducts } from 'actions/product_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    users: entities.users
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getProducts: () => dispatch(getProducts())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
