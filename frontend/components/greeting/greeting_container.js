import Greeting from 'components/greeting/greeting';
import { connect } from 'react-redux';
import { logout } from 'actions/session_actions';

const mapStateToProps = ({ session: { currentUser } }) => {
  return ({
    currentUser,
    transactions: currentUser ? currentUser.transactions : 0,
    currentUserName: currentUser ? currentUser.email.substring(0, currentUser.email.lastIndexOf("@")) : ""
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
