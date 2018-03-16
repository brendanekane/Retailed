import React from 'react';
import { withRouter } from 'react-router-dom';

class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      price: "",
      designer: "",
      name: "",
      clothing_type: "",
      size: "",
      clothing_category: "",
      description: "",
      photos: [{imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null},
        {imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null},
        {imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null}, {imageFile: null, imageUrl: null}]
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      user_id: this.props.currentUser.id
    });
  }

  updatePrice() {
    return e => this.setState({
      price: parseFloat(e.currentTarget.value)
    });
  }

  updateFile(idx) {
    return (e) => {
      const fileReader = new FileReader();
      const file = e.currentTarget.files[0];
      fileReader.onloadend = () => {
        const photosCopy = this.state.photos.slice(0);
        photosCopy[idx] = {imageFile: file, imageUrl: fileReader.result};
        this.setState({ photos: photosCopy });
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  handleCreate(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product[user_id]", this.state.user_id);
    formData.append("product[price]", this.state.price);
    formData.append("product[designer]", this.state.designer);
    formData.append("product[name]", this.state.name);
    formData.append("product[clothing_type]", this.state.clothing_type);
    formData.append("product[size]", this.state.size);
    formData.append("product[clothing_category]", this.state.clothing_category);
    formData.append("product[description]", this.state.description);
    this.state.photos.forEach(photo => {
      if (photo.imageFile) {
        formData.append("product[product_photos_attributes][][image]", photo.imageFile)
      }
    });
    this.props.createProduct(formData).then((data)=> {
      // debugger
      // const last = data.currentUser.products.length - 1;
      // const products = data.currentUser.products;
      this.props.history.push(`/users/${this.state.user_id}`);
    });
  }
  //
  renderProductErrors() {
    return(
      <ul className="sell-form-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  sellProductForm() {
    return (
      <form className='sell-clothing-form-container'>
        <div className='clothing-main-info'>
          <h2>DETAILS</h2>
          <select className='clothing-type' onBlur={this.update('clothing_type')}>
            <option value='Tops' key='1'>Tops</option>
            <option value='Bottoms' key='2'>Bottoms</option>
            <option value='Outerwear' key='3'>Outerwear</option>
            <option value='Footwear' key='4'>Footwear</option>
            <option value='Tailoring' key='5'>Tailoring</option>
            <option value='Accessories' key='6'>Accessories</option>
          </select>
          <select className='clothing-size' onBlur={this.update('size')}>
            <option value='XXS' key='1'>XXS</option>
            <option value='XS' key='2'>XS</option>
            <option value='S' key='3'>S</option>
            <option value='M' key='4'>M</option>
            <option value='L' key='5'>L</option>
            <option value='XL' key='6'>XL</option>
            <option value='XXL' key='7'>XXL</option>
            <option value='OS' key='8'>OS</option>
          </select>
          <input className='clothing-designer' type='text' onChange={this.update('designer')} onClick={e => e.stopPropagation()} placeholder='Designer'></input>
          <input className='clothing-name' type='text' onChange={this.update('name')} onClick={e => e.stopPropagation()} placeholder='Name'></input>
        </div>
          <div className='clothing-category-container'>
            <h2>MARKET</h2>
            <select className='clothing-category' onBlur={this.update('clothing_category')}>
              <option value='Retails' key='1'>RETAILS</option>
              <option value='Hype' key='2'>HYPE</option>
              <option value='Sartorial' key='3'>SARTORIAL</option>
              <option value='Core' key='4'>CORE</option>
            </select >
            <div className='category-descriptions'>
              <div className='category-label-retails'>
                <h2>RETAILS</h2>
                <p className="category-retails-description">For high-end designers like: Rick Owens, Saint Laurent, Raf Simons, A.P.C., Maison Margiela, Acne, Comme des Garcons, Balmain, Undercover, Gucci, etc.</p>
              </div>
              <div className='category-label-hype'>
                <h2>HYPE</h2>
                <p className='category-hype-description'>For highly anticipated new releases like: Supreme, Jordan, Yeezy, Palace, Bape, BBC, F.O.G., Artist Merch, New Collaborations, New Drops/Releases, etc.</p>
              </div>
              <div className='category-label-sartorial'>
                <h2>SARTORIAL</h2>
                <p className='category-sartorial-description'>For high-end Classic Menswear: Brunello Cucinelli, Loro Piana, Tom Ford, Kiton, Boglioli, Alden, Crocket & Jones, Incotex, Isaia, Drakes, etc.</p>
              </div>
              <div className='category-label-core'>
                <h2>CORE</h2>
                <p className='category-core-description'>For mainstream brands like: J.Crew, Uniqlo, Levi's, Polo, Ralph Lauren, Gap, Tommy Hilfiger, H&M, Zara, Vintage, Custom Pieces, etc.</p>
              </div>
            </div>
          </div>
          <div className='clothing-description-container'>
            <h2>DESCRIPTION</h2>
            <textarea className='clothing-description' onChange={this.update('description')} onClick={e => e.stopPropagation()} placeholder='Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc'></textarea>
          </div>
          <div className='clothing-price-container'>
            <h2>PRICE</h2>
            <input className='clothing-price' type='number' step='.01' onChange={this.updatePrice()} onClick={e => e.stopPropagation()} placeholder='price'></input>
          </div>
          <div className='clothing-photos-container'>
              <h2 className='clothing-photos-header'>PHOTOS</h2>
            <div className='clothing-main-photo-container'>
              <label htmlFor='clothing-main-photo-input'>
                <img className='clothing-main-photo' src={this.state.photos[0].imageUrl}></img>
              </label>
              <input id='clothing-main-photo-input' type='file' onChange={this.updateFile(0)}></input>
            </div>
            <div className='clothing-secondary-photos-container'>
              <div className='clothing-photo-input-container-2'>
                <label htmlFor='clothing-photo-input-2'>
                  <img className='clothing-photo-2' src={this.state.photos[1].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-2' type='file' onChange={this.updateFile(1)}></input>
              </div>
              <div className='clothing-photo-input-container-3'>
                <label htmlFor='clothing-photo-input-3'>
                  <img className='clothing-photo-3' src={this.state.photos[2].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-3' type='file' onChange={this.updateFile(2)}></input>
              </div>
              <div className='clothing-photo-input-container-4'>
                <label htmlFor='clothing-photo-input-4'>
                  <img className='clothing-photo-4' src={this.state.photos[3].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-4' type='file' onChange={this.updateFile(3)}></input>
              </div>
              <div className='clothing-photo-input-container-5'>
                <label htmlFor='clothing-photo-input-5'>
                  <img className='clothing-photo-5' src={this.state.photos[4].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-5' type='file' onChange={this.updateFile(4)}></input>
              </div>
              <div className='clothing-photo-input-container-6'>
                <label htmlFor='clothing-photo-input-6'>
                  <img className='clothing-photo-6' src={this.state.photos[5].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-6' type='file' onChange={this.updateFile(5)}></input>
              </div>
              <div className='clothing-photo-input-container-7'>
                <label htmlFor='clothing-photo-input-7'>
                  <img className='clothing-photo-7' src={this.state.photos[6].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-7' type='file' onChange={this.updateFile(6)}></input>
              </div>
              <div className='clothing-photo-input-container-8'>
                <label htmlFor='clothing-photo-input-8'>
                  <img className='clothing-photo-8' src={this.state.photos[7].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-8' type='file' onChange={this.updateFile(7)}></input>
              </div>
              <div className='clothing-photo-input-container-9'>
                <label htmlFor='clothing-photo-input-9'>
                  <img className='clothing-photo-9' src={this.state.photos[8].imageUrl}></img>
                </label>
                <input id='clothing-photo-input-9' type='file' onChange={this.updateFile(8)}></input>
              </div>
            </div>
          </div>
          <button className='publish-clothing-button' onClick={this.handleCreate}>PUBLISH</button>
      </form>
    )
  }

  //className="fas fa-camera" on clothing-main-photo-input <label>

  renderProductErrorsForm() {
    if (this.props.errors.length === 0) {
      {return this.sellProductForm()}
    } else {
      return (
        <form className='sell-clothing-form-container'>
          <div className='sell-clothing-errors'>{this.renderProductErrors()}</div>
          <div className='clothing-main-info'>
            <h2>DETAILS</h2>
            <select className='clothing-type' onBlur={this.update('clothing_type')}>
              <option value='Tops' key='1'>Tops</option>
              <option value='Bottoms' key='2'>Bottoms</option>
              <option value='Outerwear' key='3'>Outerwear</option>
              <option value='Footwear' key='4'>Footwear</option>
              <option value='Tailoring' key='5'>Tailoring</option>
              <option value='Accessories' key='6'>Accessories</option>
            </select>
            <select className='clothing-size' onBlur={this.update('size')}>
              <option value='XXS' key='1'>XXS</option>
              <option value='XS' key='2'>XS</option>
              <option value='S' key='3'>S</option>
              <option value='M' key='4'>M</option>
              <option value='L' key='5'>L</option>
              <option value='XL' key='6'>XL</option>
              <option value='XXL' key='7'>XXL</option>
              <option value='OS' key='8'>OS</option>
            </select>
            <input className='clothing-designer' type='text' onChange={this.update('designer')} onClick={e => e.stopPropagation()} placeholder='Designer'></input>
            <input className='clothing-name' type='text' onChange={this.update('name')} onClick={e => e.stopPropagation()} placeholder='Name'></input>
          </div>
            <div className='clothing-category-container'>
              <h2>MARKET</h2>
              <select className='clothing-category' onBlur={this.update('clothing_category')}>
                <option value='Retails' key='1'>RETAILS</option>
                <option value='Hype' key='2'>HYPE</option>
                <option value='Sartorial' key='3'>SARTORIAL</option>
                <option value='Core' key='4'>CORE</option>
              </select >
              <div className='category-descriptions'>
                <div className='category-label-retails'>
                  <h2>RETAILS</h2>
                  <p className="category-retails-description">For high-end designers like: Rick Owens, Saint Laurent, Raf Simons, A.P.C., Maison Margiela, Acne, Comme des Garcons, Balmain, Undercover, Gucci, etc.</p>
                </div>
                <div className='category-label-hype'>
                  <h2>HYPE</h2>
                  <p className='category-hype-description'>For highly anticipated new releases like: Supreme, Jordan, Yeezy, Palace, Bape, BBC, F.O.G., Artist Merch, New Collaborations, New Drops/Releases, etc.</p>
                </div>
                <div className='category-label-sartorial'>
                  <h2>SARTORIAL</h2>
                  <p className='category-sartorial-description'>For high-end Classic Menswear: Brunello Cucinelli, Loro Piana, Tom Ford, Kiton, Boglioli, Alden, Crocket & Jones, Incotex, Isaia, Drakes, etc.</p>
                </div>
                <div className='category-label-core'>
                  <h2>CORE</h2>
                  <p className='category-core-description'>For mainstream brands like: J.Crew, Uniqlo, Levi's, Polo, Ralph Lauren, Gap, Tommy Hilfiger, H&M, Zara, Vintage, Custom Pieces, etc.</p>
                </div>
              </div>
            </div>
            <div className='clothing-description-container'>
              <h2>DESCRIPTION</h2>
              <textarea className='clothing-description' onChange={this.update('description')} onClick={e => e.stopPropagation()} placeholder='Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc'></textarea>
            </div>
            <div className='clothing-price-container'>
              <h2>PRICE</h2>
              <input className='clothing-price' type='number' step='.01' onChange={this.updatePrice()} onClick={e => e.stopPropagation()} placeholder='price'></input>
            </div>
            <div className='clothing-photos-container'>
              <div className='clothing-main-photo-container'>
                <label htmlFor='clothing-main-photo-input'>
                  <img className='clothing-main-photo' src={this.state.photos[0].imageUrl}></img>
                </label>
                <input id='clothing-main-photo-input' type='file' onChange={this.updateFile(0)}></input>
              </div>
              <div className='clothing-secondary-photos-container'>
                <div className='clothing-photo-input-container-2'>
                  <label htmlFor='clothing-photo-input-2'>
                    <img className='clothing-photo-2' src={this.state.photos[1].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-2' type='file' onChange={this.updateFile(1)}></input>
                </div>
                <div className='clothing-photo-input-container-3'>
                  <label htmlFor='clothing-photo-input-3'>
                    <img className='clothing-photo-3' src={this.state.photos[2].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-3' type='file' onChange={this.updateFile(2)}></input>
                </div>
                <div className='clothing-photo-input-container-4'>
                  <label htmlFor='clothing-photo-input-4'>
                    <img className='clothing-photo-4' src={this.state.photos[3].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-4' type='file' onChange={this.updateFile(3)}></input>
                </div>
                <div className='clothing-photo-input-container-5'>
                  <label htmlFor='clothing-photo-input-5'>
                    <img className='clothing-photo-5' src={this.state.photos[4].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-5' type='file' onChange={this.updateFile(4)}></input>
                </div>
                <div className='clothing-photo-input-container-6'>
                  <label htmlFor='clothing-photo-input-6'>
                    <img className='clothing-photo-6' src={this.state.photos[5].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-6' type='file' onChange={this.updateFile(5)}></input>
                </div>
                <div className='clothing-photo-input-container-7'>
                  <label htmlFor='clothing-photo-input-7'>
                    <img className='clothing-photo-7' src={this.state.photos[6].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-7' type='file' onChange={this.updateFile(6)}></input>
                </div>
                <div className='clothing-photo-input-container-8'>
                  <label htmlFor='clothing-photo-input-8'>
                    <img className='clothing-photo-8' src={this.state.photos[7].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-8' type='file' onChange={this.updateFile(7)}></input>
                </div>
                <div className='clothing-photo-input-container-9'>
                  <label htmlFor='clothing-photo-input-9'>
                    <img className='clothing-photo-9' src={this.state.photos[8].imageUrl}></img>
                  </label>
                  <input id='clothing-photo-input-9' type='file' onChange={this.updateFile(8)}></input>
                </div>
              </div>
            </div>
            <button className='publish-clothing-button' onClick={this.handleCreate}>PUBLISH</button>
        </form>
      )
    }
  }

  render() {
    return (
      <div className='sell-form-wrapper'>
        <div className='sell-form-header'>
          <h2 className='sell-form-header-text'>Turn Your Closet Into Cash</h2>
          <img className='sell-form-header-img' src='https://az616578.vo.msecnd.net/files/2016/07/23/636048991026298150-1917001641_1800-1.jpg'></img>
        </div>
        {this.renderProductErrorsForm()}
      </div>
    )
  }


}

export default withRouter(SellForm);
