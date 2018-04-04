import { connect } from 'react-redux';
import SellForm from 'components/sell/sell_form';
import { createProduct, clearProductErrors } from 'actions/product_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, errors}) => {
  return ({
    currentUser: session.currentUser,
    errors: errors.products.slice(0)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createProduct: product => dispatch(createProduct(product)),
    clearProductErrors: () => dispatch(clearProductErrors())
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellForm);
