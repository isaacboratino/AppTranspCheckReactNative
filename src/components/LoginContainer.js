import React, {Component} from 'react';
import {Input, Card, CardSection, Button, Title} from './common';

class LoginContainer extends Component {
  state = { user: '', password: '', error: '', loading: false };

  render() {
    return (
      <Card>
        <CardSection>
          <Title>Login</Title>
        </CardSection>

        <CardSection>
          <Input
            placeholder=''
            label='Usuario'
            value={this.state.user}
            onChangeText={user => this.setState({ user })}
          />
        </CardSection>

        <CardSection>
            <Input
              secureTextEntry
              placeholder=""
              label="Senha"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
        </CardSection>

        <CardSection>
          <Button>ENTRAR</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginContainer;
