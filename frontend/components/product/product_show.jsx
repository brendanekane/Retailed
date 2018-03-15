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
        <div className='product-photo-main-container'>
          <img className='product-photo-main' src={this.props.photos[this.props.product['id']].image_url}></img>
        </div>
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




  // {Object.values(this.props.photos).slice(1).map((photo, idx) =>(
  //   <div className={`product-sub-photo-container-${idx}`}>
  //     <img className={`product-sub-photo-${idx}`} src={photo.image_url}></img>
  //   </div>
  // ))}




// I think that this is the closest to what I need to do, error it gives me
// is that Objects are not valid as a react child

//   <div>{
//       Object.values(this.props.photos).filter((photo, idx) => {
//         if (photo['product_id'] === this.props.product['id']) {
//           debugger
//           const image = photo.image_url
//           return (<div className={`product-sub-photo-container-${idx}`}>
//             <img src={image}></img>
//           </div>
//         )
//       }
//     })
//   }
//
// </div>
