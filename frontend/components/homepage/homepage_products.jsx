import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HomepageProducts = (props) => {
  return(
    <div>
      <div className='homepage-products-header'>
        <h2>BROWSE THE FEED</h2>
      </div>
      <ul className='homepage-product-items'>
        {props.products.map(product => {
          const photos = props.photos;
          return (
            <li key={`homepage-product-item-${product.id}`} className={`homepage-product-item-${product.id}`}>
              <Link to={`/products/${product.id}`} className={`homepage-link-item-${product.id}`}>
                <div className='homepage-link-item-div' style={{background: `url(${photos[product.photo_ids[0]].image_url})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
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
    </div>
  )
}

export default withRouter(HomepageProducts);
