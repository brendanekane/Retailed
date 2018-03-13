import React from 'react';
import { withRouter } from 'react-router-dom';
import HomepageProductsContainer from 'components/homepage/homepage_products_container';
import HomepageTopProductsContainer from 'components/homepage/homepage_top_products_container';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getProducts();
  }


  render() {
    return(
      <div>
        <HomepageTopProductsContainer />
        <HomepageProductsContainer />
      </div>
    )
  }
}


export default withRouter(Homepage);
