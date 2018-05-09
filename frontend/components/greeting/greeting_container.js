import Greeting from 'components/greeting/greeting';
import { connect } from 'react-redux';

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

export default connect(
  mapStateToProps
)(Greeting);
