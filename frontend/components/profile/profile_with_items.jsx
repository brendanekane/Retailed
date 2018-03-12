import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileWithItems extends React.Component {
  constructor(props) {
    super(props);
  }
  // <img src={product.}></img>
  render() {
    return(
      <ul className='user-product-items'>
        {props.currentUser.product_ids.map(product => {
          return (
            <li className={`user-product-item-${product.id}`}>
              <br/>
              <p className='user-product-created_at'>{product.created_at}</p>
              <br/>
              <p className='user-product-designer'>{product.designer}</p>
              <br/>
              <p className='user-product-size'>{product.size}</p>
              <br/>
              <p className='user-product-name'>{product.name}</p>
              <br/>
              <p className='user-product-price'>${product.price}</p>
              <br/>
              <br/>
            </li>
          )}
        )}
      </ul>
    )

  }
}

export default ProfileWithItems;
