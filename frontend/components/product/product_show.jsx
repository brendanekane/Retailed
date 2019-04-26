import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const newMainPhoto = e.target;
    const oldMainPhoto = document.querySelector('.product-photo-main');
    debugger
    [newMainPhoto.src, oldMainPhoto.src] = [oldMainPhoto.src, newMainPhoto.src];
    debugger
  }


  render() {

    if (this.props.product !== undefined) {

    const photosArr = Object.values(this.props.photos).filter(photo =>{
      if (photo.product_id === this.props.product.id) {
        return photo;
      }
    });
    const mainPhoto = photosArr.slice(0,1);
    const subPhotos = [];

    photosArr.slice(1).forEach((photo, idx) => {
      if (photo.product_id === this.props.product.id) {
        const image = photo.image_url;
        subPhotos.push(
          <div key={idx} onClick={this.handleClick} className={`product-sub-photo-container-${idx}`}>
            <img src={image}></img>
          </div>
        )
      }
    })

    return (
      <div className= 'product-photos-container'>
        <div className='product-photo-main-container'>
          <img className='product-photo-main' src={mainPhoto[0].image_url}></img>
        </div>
        <div className='product-sub-photos-wrapper' >{subPhotos}</div>
      </div>
    );} else {
      return(
        <div></div>
      )
    }
  }
}

export default withRouter(ProductShow);
