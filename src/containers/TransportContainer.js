import React, {Component} from 'react';
import ReactNative, {Modal, View, ScrollView, Text, Dimensions, Image} from 'react-native';
import Camera from 'react-native-camera';
import {InputIcon, Card, CardSection, Button, Title, Header} from './../components';
import { ColorsConfig } from './../configs';

class TransportContainer extends Component {

  state = { user: '', password: '', error: '', isModalCanhotoVisible: false,
            loading: false, path: require('../../images/icon_person.png') };

  openModal() {
    this.setState({isModalCanhotoVisible:true});
  }

  closeModal() {
    this.setState({isModalCanhotoVisible:false});
  }

  takePicture() {
    this.camera.capture()
     .then((data) => {

       console.log(data);

       let pathFile = data.path.toString().replace('file://','')

       this.setState({path: require(pathFile)});

       closeModal();

     })
     .catch(err => console.error(err));
 }

  render() {
    return (
      <View style={styles.view}>
        <Header headerText="Transp Check" />
        <ScrollView style={styles.scrollStyle}>

          <Card>
            <CardSection>
              <Title>Transporte</Title>
            </CardSection>

            <CardSection>
              <InputIcon
                icon={require('../../images/icon_maps_pointer.png')}
                placeholder='Endereco Origem'
                label='Endereco Origem'
                value={this.state.user}
                isEditable={false}
              />
            </CardSection>

            <CardSection>
              <InputIcon
                  icon={require('../../images/icon_maps_pointer.png')}
                  placeholder='Endereco Destino'
                  label='Endereco Destino'
                  value={this.state.password}
                  isEditable={false}
                />
            </CardSection>

            <Card style={styles.card}>
              <CardSection style={styles.cardSection}>
                <Image source={this.state.path}
                  style={styles.caption}
                  resizeMode='contain' />
              </CardSection>
              <CardSection style={styles.cardSection}>
                <Button style={styles.buttonAdd}
                  onPress={this.openModal.bind(this)}
                  iconRight={require('../../images/icon_add_photo_white.png')}>CANHOTO</Button>
              </CardSection>
            </Card>

            <Card style={styles.card}>
              <CardSection style={styles.cardSection}>
                <Image source={this.state.path}
                  style={styles.caption}
                  resizeMode='contain' />
              </CardSection>
              <CardSection style={styles.cardSection}>
                <Button style={styles.buttonAdd}
                    iconRight={require('../../images/icon_add_photo_white.png')}>ASSINATURA</Button>
              </CardSection>
            </Card>

            <CardSection>
              <Button>ENVIAR</Button>
            </CardSection>

          </Card>
        </ScrollView>

        <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.isModalCanhotoVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>

           <View style={styles.modalContainer}>
             <Camera
                  ref={(cam) => { this.camera = cam; }}
                  style={styles.cameraPreview}
                  visible={this.state.isModalCanhotoVisible}
                  aspect={Camera.constants.Aspect.fill}>

                  <Button onPress={this.takePicture.bind(this)}>CAPTURAR</Button>

              </Camera>
           </View>

        </Modal>

      </View>
    );
  }
}

const styles = {
  view:{
    flex:1,
  },
  scrollStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 16,
    paddingTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
    flex: 1
  },
  modalContainer: {
    flex:1,
    flexDirection: 'column',
    marginTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#AAAAAA',

  },
  cameraPreview: {
   flex:3,
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width ,
   backgroundColor: '#333333'
 },
 buttonAdd: {
   flex: 1,
   alignSelf: 'center',
   height: 100,
   borderRadius: 30,
   backgroundColor: ColorsConfig.transportContainer.buttonAdd.background,
   padding: 0,
   margin: 0
 },
 card: {
   marginTop: 16,
   padding: 0,
   margin: 0,
 },
 cardSection: {
   padding: 0,
   margin: 0,
 },
 caption: {
   padding: 0,
   margin: 0,
   flex: 1,
   alignSelf: 'stretch',
 },
};

export default TransportContainer;
