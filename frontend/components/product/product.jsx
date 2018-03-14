import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductShowContainer from 'components/product/product_show_container';
import ProductDetailContainer from 'components/product/product_detail_container';


class Product extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    this.props.getProducts().then( () => {
      this.props.getOneUser(this.props.product['user_id']);
    });
    this.props.getItems();
  }


  render() {
    return (
      <div className='product-show-page-wrapper'>
        <ProductShowContainer />
        <ProductDetailContainer />
      </div>
    )
  }
}

export default withRouter(Product);
