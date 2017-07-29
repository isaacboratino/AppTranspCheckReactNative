import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from './../actions';
import {View} from 'react-native';
import {Input, InputIcon, Card, CardSection, Button, Title, Spinner, Header} from './../components/common';

class LoginContainer extends Component {

  onUserChangeText() {
    //this.props.LoginUser();
  }

  onPasswordChangeText() {
    //
  }

  onEntrarClick() {
    const {user, password} = this.props;
    this.props.loginUser({user, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onEntrarClick.bind(this)}>ENTRAR</Button>
    );
  }

  render() {

    return (

      <View>
        <Header headerText="Transp Check" />
        <View style={styles.containerStyle}>

        <Card>
          <CardSection>
            <Title>Login</Title>
          </CardSection>

          <CardSection>
            <InputIcon
              icon={require('../../images/icon_person.png')}
              placeholder=''
              label='Usuario'
              value={this.props.user}
              onChangeText={this.onUserChangeText.bind(this)}
            />
          </CardSection>

          <CardSection>
            <InputIcon
              icon={require('../../images/icon_key.png')}
                secureTextEntry
                placeholder=""
                label="Senha"
                value={this.props.password}
                onChangeText={this.onPasswordChangeText.bind(this)}
              />
          </CardSection>

          <Title>
            {this.props.error}
          </Title>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>

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
};

const mapStateToProps = ({ loginState }) => {
  const { user, password, error, loading, logado } = loginState;
  return { user, password, error, loading, logado };
};

export default connect(mapStateToProps, {
  loginUser
})(LoginContainer);
