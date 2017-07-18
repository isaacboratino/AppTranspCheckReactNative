import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Input, Card, CardSection} from './components/common';

class App extends Component {
  state = { email: '', password: '', error: '', loading: false };

  renderContent() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Teste rrrrrrrr</Text>
      </View>
    );
  }
}

export default App;
