import React from 'react';
import { Link } from 'react-router-dom'

// this.props.photos[topProducts[0].id].image_url
class HomepageTopProducts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products
    }
  }
  render() {
    function productSort(key) {
    var order = 1;
    if(key[0] === "-") {
        order = -1;
        key = key.substr(1);
    }
    return function (a,b) {
        var result = (a[key] < b[key]) ? 1 : (a[key] > b[key]) ? -1 : 0;
        return result * order;
    }
}
    const sortedProducts = Object.values(this.props.products).sort(productSort('price'));
    const photos = this.props.photos;
    const topProducts = [];
    for (let i = 0; i < 3; i++) {
      if (sortedProducts[i]) {
        topProducts.push(sortedProducts[i]);
      }
    }
    let topProductsList = [];
    if (topProducts.length !== 0) {
      topProductsList = topProducts.map((product, idx) => {
        const productPhotos = [];
        Object.values(photos).filter(photo => {if (photo.product_id === product.id) {
            productPhotos.push(photo)
          }
        });
        return (
          <div className={`homepage-top-product-item-${idx}`}>
            <div className={`homepage-top-products-details-container-${idx}`}>
              <div className={`homepage-designerprice-container-${idx}`}>
                <p className={`homepage-top-product-designer-${idx}`}>{product.designer}</p>
                <p className={`homepage-top-product-price-${idx}`}>${product.price}</p>
              </div>
              <p className={`homepage-top-product-size-${idx}`}>{product.size}</p>
              <br/>
              <p className={`homepage-top-product-name-${idx}`}>{product.name}</p>
              <br/>
            </div>
            <Link to={`/products/${product.id}`}>
              <img className={`homepage-top-product-img-${idx}`} src={productPhotos[0].image_url}></img>
            </Link>
          </div>
        )
      })
    }
    return(
      <div className='top-product-container'>
        <div className='top-products-header'>
          <h2>TOP RETAILS</h2>
        </div>
        <div className='top-product-main-container'>
          { topProductsList[0] }
          <div className='top-product-side-container'>
            { topProductsList[1] }
            { topProductsList[2] }
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageTopProducts;
