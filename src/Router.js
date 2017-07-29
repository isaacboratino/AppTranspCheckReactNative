import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginContainer from './containers/LoginContainer';
import TransportContainer from './containers/TransportContainer';

const RouterComponent = () => {
  <Scene>
    <Scene key='login'>
      <Scene key='container'
             component={LoginContainer}
             title='Por favor entre' />
    </Scene>

    <Scene key="transport">
      <Scene key="continer" component={TransportContainer} title="Transporte" />
    </Scene>

  </Scene>
};

export default RouterComponent;
