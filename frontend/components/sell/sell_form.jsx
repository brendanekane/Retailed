import React from 'react';
import { withRouter } from 'react-router-dom';

class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
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

  handleCreate(e) {
    e.preventDefault();
    this.props.createProduct(this.state);
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
          <button className='publish-clothing-button' onClick={this.handleCreate}>PUBLISH</button>
      </form>
    )
  }

  renderProductErrorsForm() {
    if (this.props.errors.length === 0) {
      {return this.sellProductForm()}
    } else { debugger
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
