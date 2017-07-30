import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, InputIcon, Card, CardSection, Button, Title, Header} from './../components';

class TransportContainer extends Component {

  state = { user: '', password: '', error: '', loading: false };

  render() {
    return (

      <View>
        <Header headerText="Transp Check" />
        <View style={styles.containerStyle}>

          <Card>
            <CardSection>
              <Title>Transporte huhuhu</Title>
            </CardSection>

            <CardSection>
              <InputIcon
                icon={require('../../images/icon_maps_pointer.png')}
                placeholder=''
                label='Endereco Origem'
                value={this.state.user}
                onChangeText={user => this.setState({ user })}
              />
            </CardSection>

            <CardSection>
              <InputIcon
                icon={require('../../images/icon_maps_pointer.png')}
                  placeholder=""
                  label="Endereco Destino"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
            </CardSection>


              <Card>
                <CardSection>
                  <Button>CANHOTO</Button>
                </CardSection>
              </Card>

            <CardSection>
              <Button>ENVIAR</Button>
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

export default TransportContainer;
