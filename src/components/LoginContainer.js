import React, {Component} from 'react';
import {Input, Card, CardSection, Button} from './common';

class LoginContainer extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Button>ENTRAR</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginContainer;
