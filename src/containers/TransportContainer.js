import React, {Component} from 'react';
import {View, ScrollView, Text, Dimensions, Image} from 'react-native';
import Camera from 'react-native-camera';
import {Input, InputIcon, Card, CardSection, Button, Title, Header} from './../components';

class TransportContainer extends Component {

  state = { user: '', password: '', error: '', loading: false, path: require('../../images/icon_person.png') };

  takePicture() {
   this.camera.capture()
     .then((data) => {

       console.log(data);

       let pathFile = data.path.toString().replace('file://','')

       this.setState({path: require(pathFile)});

     })
     .catch(err => console.error(err));
 }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText="Transp Check" />
        <ScrollView style={styles.scrollStyle}>

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

            <CardSection>

              <Camera
                   ref={(cam) => {
                     this.camera = cam;
                   }}
                   style={styles.preview}
                   aspect={Camera.constants.Aspect.fill}>
                   <Text style={styles.capture}
                     onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
               </Camera>

            </CardSection>

              <Card>
                <CardSection>
                  <Image source={this.state.path} resizeMode='contain'></Image>
                </CardSection>
                <CardSection>
                  <Button>CANHOTO</Button>
                </CardSection>
              </Card>

            <CardSection>
              <Button>ENVIAR</Button>
            </CardSection>

          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  scrollStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
    flex: 1
  },
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height / 4,
   width: Dimensions.get('window').width / 4
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 10
  }
};

export default TransportContainer;
