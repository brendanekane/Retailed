import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductShow from 'components/product/product_show';


const mapStateToProps = ({session, entities}, ownProps) => {
  return ({
    product: entities.products[ownProps.match.params.productId],
    users: entities.users,
    photos: entities.photos
  });
};

export default withRouter(connect(
  mapStateToProps
)(ProductShow));
