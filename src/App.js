import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Orientation from 'react-native-orientation';
import StoreConfig from './configs/StoreConfig';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    Orientation.getInitialOrientation();
    Orientation.lockToPortrait();
  }

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
