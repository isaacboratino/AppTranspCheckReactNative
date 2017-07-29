import React, {Component} from 'react';
import {Provider} from 'react-redux';
import StoreConfig from './configs/StoreConfig';
import Router from './Router';

class App extends Component {

  render() {

    const store = StoreConfig();

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
