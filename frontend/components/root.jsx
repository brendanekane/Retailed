import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from 'components/App';
import ScrollToTop from 'components/scroll_to_top';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop>
          <App store={store}/>
        </ScrollToTop>
      </HashRouter>
    </Provider>
  )
};

export default Root;
