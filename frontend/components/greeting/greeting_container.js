import Greeting from 'components/greeting/greeting';
import { connect } from 'react-redux';
import { logout } from 'actions/session_actions';
import { updateUser } from 'actions/user_actions'

const mapStateToProps = ({ session: { currentUser } }) => {
  return ({
    currentUser,
    transactions: currentUser ? currentUser.transactions : 0,
    currentUserName: currentUser ? currentUser.email.substring(0, currentUser.email.lastIndexOf("@")) : "",
    location: currentUser ? currentUser.location : "",
    weight: currentUser ? currentUser.weight : "",
    height: currentUser ? currentUser.height : ""
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    updateUser: user => dispatch(updateUser())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
