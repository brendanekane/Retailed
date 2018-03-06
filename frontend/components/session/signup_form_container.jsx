import { connect } from 'react-redux';
import SessionForm from 'components/session/session_form';
import { logIn} from 'actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'Log In',
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) =>  dispatch(logIn(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
