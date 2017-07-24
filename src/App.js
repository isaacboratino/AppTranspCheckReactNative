import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import LoginContainer from './components/LoginContainer';
import TransportContainer from './components/TransportContainer';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Transp Check" />
        <View style={styles.containerStyle}>
          <TransportContainer />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
  }
}

export default App;
