import { connect } from 'react-redux';
import HomepageTopProducts from 'components/homepage/homepage_top_products';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    products: entities.products,
    photos: entities.photos
  });
};


export default connect(
  mapStateToProps
)(HomepageTopProducts);
