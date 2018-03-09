import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.currentUser.email,
      height: this.props.currentUser.height === null ? "" : currentUser.height,
      weight: this.props.currentUser.weight === null ? "" : currentUser.weight,
      location: this.props.currentUser.location === null ? "" : currentUser.location
    };
    this.handleClick = this.handleClick.bind(this)
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateUser();
  }

  // errors() {
  //   if (this.props.errors) {
  //     return (
  //       this.props.errors.map(error => {
  //         return (<li className="error" key={error}>{error}</li>);
  //       })
  //     );
  //   }
  // }
  //
  // <ul className= 'profile-edit-errors'>
  //   {this.errors()}
  // </ul>

  render() {
    return (
      <section className='profile-details'>
        <form className='profile-edit-form' onClick={this.handleClick}>
          <input type='text' value={this.state.email} onChange={this.update('email')} onClick={e => e.stopPropagation()}></input>
          <select value={this.state.location} onChange={this.update('location')}>
            return (
            <option value='United States' key='1'>United States</option>
            <option value='Canada' key='2'>Canada</option>
            <option value='United Kingom' key='3'>United Kingom</option>
            <option value='Europe' key='4'>Europe</option>
            <option value='Asia' key='5'>Asia</option>
            <option value='Australia/NZ' key='6'>Australia/NZ</option>

            )
          </select>
          <input type='text' value={this.state.weight} placeholder='Weight(in inches)' onChange={this.update('weight')}></input>
          <input type='text' value={this.state.height} placeholder='Height(in pounds)' onChange={this.update('height')}></input>
        </form>
      </section>
    )

  }

}

export default withRouter(ProfileEditForm)
