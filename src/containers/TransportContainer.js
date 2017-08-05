import React, {Component} from 'react';
import ReactNative, {Modal, View, ScrollView, Text, Dimensions, Image} from 'react-native';
import Camera from 'react-native-camera';
import {InputIcon, Card, CardSection, Button, Title, Header} from './../components';
import { ColorsConfig } from './../configs';

class TransportContainer extends Component {

  state = { error: '', isModalCanhotoVisible: false,
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

       this.setState({path: { uri : pathFile }});

       this.closeModal();

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
                isEditable={false}
              />
            </CardSection>

            <CardSection>
              <InputIcon
                  icon={require('../../images/icon_maps_pointer.png')}
                  placeholder='Endereco Destino'
                  label='Endereco Destino'
                  isEditable={false}
                />
            </CardSection>

            <Card style={styles.card}>
              <CardSection style={styles.cardSection}>
                <Image source={this.state.path}
                  style={styles.thumbnail}
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
                  style={styles.thumbnail}
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

           <View style={styles.modal.content}>
             <Camera
                  ref={(cam) => { this.camera = cam; }}
                  style={styles.cameraPreview}
                  visible={this.state.isModalCanhotoVisible}
                  aspect={Camera.constants.Aspect.fill}></Camera>

              <View style={styles.modal.bottomToolbar}>
                <Button onPress={this.takePicture.bind(this)}
                  style={styles.buttonCaptureCancel}>CANCELAR</Button>

                <Button onPress={this.takePicture.bind(this)}
                  style={styles.buttonCaptureCancel}>CAPTURAR</Button>
              </View>

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
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 16,
    paddingTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
  },
  modal: {
    content: {
      flex: 1,
      marginTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: '#AAA00A',
    },
    bottomToolbar: {
      flex: 1,
      height: 60,
      padding: 16,
      flexDirection: 'row',
      backgroundColor: '#AAAAAA',
    }
  },
  buttonCaptureCancel: {
    flex:1,
    backgroundColor: ColorsConfig.transportContainer.buttonAdd.background,
  },
  cameraPreview: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333333'
 },
 buttonAdd: {
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
 thumbnail: {
   padding: 0,
   margin: 0,
   flex: 1,
   alignSelf: 'stretch',
 },
};

export default TransportContainer;
