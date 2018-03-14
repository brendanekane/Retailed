import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomepageProducts extends React.Component{
  constructor(props) {
    super(props);
  }





  render() {
    return(
      <ul className='homepage-product-items'>
        <div className='homepage-products-header'>
          <h2>BROWSE THE FEED</h2>
        </div>
        {this.props.products.map(product => {
          const photos = this.props.photos;
          return (
            <li className={`homepage-product-item-${product.id}`}>
              <Link to={`/products/${product.id}`} className={`homepage-link-item-${product.id}`}>
                <img src={photos[product.photo_ids[0]].image_url}></img>
              </Link>
              <br/>
              <p className='homepage-product-created_at'>{product.created_at}</p>
              <br/>
              <div className= 'homepage-product-designsize-container'>
                <p className='homepage-product-designer'>{product.designer}</p>
                <p className='homepage-product-size'>{product.size}</p>
              </div>
              <br/>
              <p className='homepage-product-name'>{product.name}</p>
              <br/>
              <p className='homepage-product-price'>${product.price}</p>
              <br/>
              <br/>
            </li>
          )}
        )}
      </ul>
    )
  }
}


export default withRouter(HomepageProducts);
