import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      email: this.props.currentUser.email,
      height: this.props.currentUser.height === null ? "" : this.props.currentUser.height,
      weight: this.props.currentUser.weight === null ? "" : this.props.currentUser.weight,
      location: this.props.currentUser.location === null ? "" : this.props.currentUser.location

    };
    this.handleClick = this.handleClick.bind(this)
  }



  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
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
        <h2>Edit Your Info</h2>
        <div className='profile-picture-container'>
          <img className='profile-edit-picture' src='https://cdn.business2community.com/wp-content/uploads/2013/06/Michael-Scott.png' alt='profile picture'></img>
          <p>Avatar</p>
        </div>
        <form className='profile-edit-form' onBlur={this.handleClick}>
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
