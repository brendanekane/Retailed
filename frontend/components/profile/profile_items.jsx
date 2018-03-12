import React from 'react';
import { withRouter } from 'react-router-dom';


const WithoutItems = () => {
  return (
    <div className='items-container'>
      <div className='itemless-info-container'>
        <p className='items-total'>You have 0 listings</p>
        <p className='profile-items-sell-link'>
          Visit the Sell Section to post your Items and turn your closet into cash!
        </p>
      </div>
      <img className='profile-items-stock-img' src='https://img.grouponcdn.com/deal/3HDE84u35P7rPR69Af8bjCE6md4f/3H-1400x840/v1/c700x420.jpg'></img>
    </div>
  );
};

const WithItems = (props) => {
  const productsArr = Object.values(props.products)
  return(
    <ul className='user-product-items'>
      {productsArr.map(product => {
        const photos = props.photos
        return (
          <li className={`user-product-item-${product.id}`}>
            <img src={photos[product.photo_ids[0]].image_url}></img>
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

class ProfileItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserProducts(this.props.currentUser.id)
  }

  render() {
    return(
      this.props.products.length !== 0 ? <WithItems currentUser={this.props.currentUser} products={this.props.products} photos={this.props.photos}/> : <WithoutItems />
    )
  }
}

export default withRouter(ProfileItems);
