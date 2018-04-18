import React from 'react';
import GreetingContainer from 'components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from 'components/session/login_form_container';
import SignupFormContainer from 'components/session/signup_form_container';
import { AuthRoute, ProtectedRoute } from 'util/route_util';
import NavbarContainer from 'components/navbar/navbar_container';
import Modal from 'components/modal';
import ProfileContainer from 'components/profile/profile_container';
import HomepageContainer from 'components/homepage/homepage_container';
import SellFormContainer from 'components/sell/sell_form_container';
import ProductContainer from 'components/product/product_container';
import CartIndexContainer from 'components/cart/cart_index_container';
import Footer from 'components/footer/footer';



const App = ({store}) => {
  let currentUser = (
    store.getState().session.currentUser === null ? "" : store.getState().session.currentUser.email
  );
  return (
    <div className="app-hook">
      <Modal />
      <NavbarContainer path='/'/>
      <Route path='/products/:productId' component={ProductContainer} />
      <Route path='/users' component={GreetingContainer} />
      <Route exact path='/' component={HomepageContainer}/>
      <Route path='/users/:id' component={ProfileContainer} />
      <Route path='/sell' component={SellFormContainer} />
      <ProtectedRoute exact path='/cart' component={CartIndexContainer}/>
      <Footer path='/'/>
    </div>
  );
};

export default App;
