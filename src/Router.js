import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginContainer from './containers/LoginContainer';
import TransportContainer from './containers/TransportContainer';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }} >
      <Scene>
        <Scene key='login'>
          <Scene key='container'
                 component={LoginContainer}
                 style={{ paddingTop: 0 }} />
        </Scene>

        <Scene key="transport">
          <Scene key="container" component={TransportContainer} />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
