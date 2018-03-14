import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }


  render() {
    if (this.props.product !== undefined) {
      return (
      <div className= 'product-photos-container'>
        <img className='product-photo-main' src={this.props.photos[this.props.product['id']].image_url}></img>
      </div>
      );
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default withRouter(ProductShow);
