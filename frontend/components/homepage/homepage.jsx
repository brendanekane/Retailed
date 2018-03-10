import React from 'react';
import { withRouter } from 'react-router-dom';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getProducts();
  }


  render() {
    return(
      <div>homepage</div>
    )
  }
}


export default withRouter(Homepage);
