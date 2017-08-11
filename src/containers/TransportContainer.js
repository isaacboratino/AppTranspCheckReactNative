import React, {Component} from 'react';
import Camera from 'react-native-camera';
import Orientation from 'react-native-orientation';
import ReactNative, {
  Modal,
  View,
  ScrollView,
  Text,
  Dimensions,
  Image
} from 'react-native';

import {
  InputIcon,
  Card,
  CardSection,
  Button,
  Title,
  Header
} from './../components';

import Ink from './../components/Ink';
import { ColorsConfig } from './../configs';

class TransportContainer extends Component {

  state = {
    error: '',
    isModalCanhotoVisible: false,
    isModalAssinaturaVisible: false,
    loading: false,
    imageCanhoto: require('../../images/icon_person.png'),
    imageAssinatura: require('../../images/icon_person.png'),
  };

  componentWillMount() {
    Orientation.getInitialOrientation();
  }

  toggleModalCanhoto() {
    this.setState({isModalCanhotoVisible: !this.state.isModalCanhotoVisible});
  }

  abrirModalAssinatura() {
    this.setState({isModalAssinaturaVisible: true});
    Orientation.lockToLandscape();
  }

  fecharModalAssinatura() {
    this.setState({isModalAssinaturaVisible: false});
    Orientation.lockToPortrait();
  }

  takePicture() {
    this.camera.capture()
     .then((data) => {

       console.log(data);

       let pathFile = data.path.toString().replace('file://','')

       this.setState({imageCanhoto: { uri : pathFile }});

       this.closeModal();

     }).catch(err => console.error(err));
 }

  onGetAssign(data) {
    console.log(data);
    this.setState({imageAssinatura: { uri : data.localFilePath }});
    this.fecharModalAssinatura();
  }

  onCloseModalAssign() {
    this.fecharModalAssinatura();
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
                <Image source={this.state.imageCanhoto}
                  style={styles.thumbnail}
                  resizeMode='contain' />
              </CardSection>

              <CardSection style={styles.cardSection}>
                <Button style={styles.buttonAdd}
                  onPress={this.toggleModalCanhoto.bind(this)}
                  iconRight={require('../../images/icon_add_photo_white.png')}>CANHOTO</Button>
              </CardSection>

            </Card>

            <Card style={styles.card}>

              <CardSection style={styles.cardSection}>
                <Image source={this.state.imageAssinatura}
                  style={styles.thumbnail}
                  resizeMode='contain' />
              </CardSection>

              <CardSection style={styles.cardSection}>
                <Button style={styles.buttonAdd}
                  onPress={this.abrirModalAssinatura.bind(this)}
                  iconRight={require('../../images/icon_ink.png')}>ASSINATURA</Button>
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

        <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.isModalAssinaturaVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>

           <View style={styles.modal.content}>
             <Ink onSave={this.onGetAssign.bind(this)}
                  onClose={this.onCloseModalAssign.bind(this)}/>
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
   width: 100,
   height: 100
 },
};

export default TransportContainer;
