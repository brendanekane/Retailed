import React from 'react';
import { withRouter } from 'react-router-dom';

class SellForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
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
      <div>Sell Form</div>
    )
  }


}

export default withRouter(SellForm);
