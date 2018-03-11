import { connect } from 'react-redux';
import SellForm from 'components/sell/sell_form';
import { createProduct } from 'actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, errors}) => {
  return ({
    currentUser: session.currentUser,
    errors: errors.products
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createProduct: product => dispatch(createProduct(product))
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellForm)
