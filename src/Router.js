 import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginContainer from './containers/LoginContainer';
import TransportContainer from './containers/TransportContainer';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key='login'>
          <Scene key='container' component={LoginContainer} hideNavBar />
        </Scene>

        <Scene key='transport'>
          <Scene key='container' component={TransportContainer} hideNavBar />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
