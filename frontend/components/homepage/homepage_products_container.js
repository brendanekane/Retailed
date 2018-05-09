import { connect } from 'react-redux';
import HomepageProducts from 'components/homepage/homepage_products';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    users: Object.values(entities.users),
    products: Object.values(entities.products),
    photos: entities.photos
  });
};


export default connect(
  mapStateToProps
)(HomepageProducts);
