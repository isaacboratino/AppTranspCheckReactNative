import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import LoginContainer from './components/LoginContainer';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Transp Check" />
        <LoginContainer />
      </View>
    );
  }
}

export default App;
