import React from 'react';
import { withRouter } from 'react-router-dom';

class HomepageProducts extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getProducts();
  }




  render() {
    return(
      <ul className='homepage-product-items'>
        {this.props.products.map(product =>
          <li className={`homepage-product-item-${product.id}`}>
            <img src='https://http2.mlstatic.com/D_Q_NP_701774-MLM26033353605_092017-Q.jpg'></img>
            <br/>
            <p className='homepage-product-created_at'>{product.created_at}</p>
            <br/>
            <p className='homepage-product-designer'>{product.designer}</p>
            <br/>
            <p className='homepage-product-size'>{product.size}</p>
            <br/>
            <p className='homepage-product-name'>{product.name}</p>
            <br/>
            <p className='homepage-product-price'>${product.price}</p>
            <br/>
            <br/>
          </li>
        )}
      </ul>
    )
  }
}


export default withRouter(HomepageProducts);
