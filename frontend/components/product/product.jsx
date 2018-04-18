import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductShowContainer from 'components/product/product_show_container';
import ProductDetailContainer from 'components/product/product_detail_container';


class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId).then( () => {
      this.props.getOneUser(this.props.product.user_id);
    });
  }


  render() {
    return (
      <div className='product-show-page-wrapper'>
        <div className='product-show-container'>
          <ProductShowContainer photos={this.props.photos}/>
          <ProductDetailContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(Product);
