import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Header} from './components/common';
import StoreConfig from './configs/StoreConfig';
import LoginContainer from './containers/LoginContainer';
import TransportContainer from './containers/TransportContainer';
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
