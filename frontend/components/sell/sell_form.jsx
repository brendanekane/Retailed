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

  render() {
    return (
      <div className='sell-form-wrapper'>
        <h2 className='sell-form-header-text'>Turn Your Closet Into Cash</h2>
        <img className='sell-form-header-img' src='https://az616578.vo.msecnd.net/files/2016/07/23/636048991026298150-1917001641_1800-1.jpg'></img>
        <form>
            <select className='clothing-type' onChange={this.update('clothing_type')}>
              <option value='Tops' key='1'>Tops</option>
              <option value='Bottoms' key='2'>Bottoms</option>
              <option value='Outerwear' key='3'>Outerwear</option>
              <option value='Footwear' key='4'>Footwear</option>
              <option value='Tailoring' key='5'>Tailoring</option>
              <option value='Accessories' key='6'>Accessories</option>
            </select>
            <select className='clothing-size' onChange={this.update('size')}>
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
            <select className='clothing_category' onChange={this.update('clothing_category')}>
              <option value='Retails' key='1'>RETAILS</option>
              <option value='Hype' key='2'>HYPE</option>
              <option value='Sartorial' key='3'>SARTORIAL</option>
              <option value='Core' key='4'>CORE</option>
            </select >
            <textarea className='clothing-description' onChange={this.update('description')} onClick={e => e.stopPropagation()} placeholder='Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc'></textarea>
            <input className='clothing-price' type='number' step='.01' onChange={this.updatePrice()} onClick={e => e.stopPropagation()} placeholder='price'></input>
            {this.renderProductErrors()}
            <button className='publish-clothing-button' onClick={this.handleCreate}>PUBLISH</button>
        </form>
      </div>
    )
  }


}

export default withRouter(SellForm);
