import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import SketchView from 'react-native-sketch-view';
import { ButtonCircle } from './../components';
import { ColorsConfig } from './../configs';

const sketchViewConstants = SketchView.constants;

const tools = {};

tools[sketchViewConstants.toolType.pen.id] = {
    id: sketchViewConstants.toolType.pen.id,
    name: sketchViewConstants.toolType.pen.name,
    nextId: sketchViewConstants.toolType.eraser.id
};
tools[sketchViewConstants.toolType.eraser.id] = {
    id: sketchViewConstants.toolType.eraser.id,
    name: sketchViewConstants.toolType.eraser.name,
    nextId: sketchViewConstants.toolType.pen.id
};

class Ink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toolSelected: sketchViewConstants.toolType.pen.id
        };
    }

    isEraserToolSelected() {
        return this.state.toolSelected === sketchViewConstants.toolType.eraser.id;
    }

    toolChangeClick() {
        this.setState({toolSelected: tools[this.state.toolSelected].nextId});
    }

    getToolName() {
        return tools[this.state.toolSelected].name;
    }

    onSketchSave(saveEvent) {
        this.props.onSave && this.props.onSave(saveEvent);
    }

    onClose(closeEvent) {
      this.props.onClose && this.props.onClose(closeEvent);
    }

    render() {
        return (
            <View style={styles.inkContainer}>

                <SketchView style={styles.ink}
                  ref="sketchRef"
                  selectedTool={this.state.toolSelected}
                  onSaveSketch={this.onSketchSave.bind(this)}
                  localSourceImagePath={this.props.localSourceImagePath}/>

                <View style={styles.toolbarContainer}>

                  <ButtonCircle style={styles.buttonClose}
                    onPress={() => { this.onClose().bind(this) }}>FECHAR</ButtonCircle>

                  <ButtonCircle style={styles.buttonClean}
                    onPress={() => { this.refs.sketchRef.clearSketch() }}>NOVO</ButtonCircle>

                  <ButtonCircle style={styles.buttonCapture}
                    onPress={() => { this.refs.sketchRef.saveSketch() }}>OK</ButtonCircle>

                </View>
            </View>

        );
    }
}

const styles = {
  inkContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 200,
  },
  ink: {
    flex: 1,
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 16
  },
  buttonClose: {
      backgroundColor: ColorsConfig.ink.buttonClose,
  },
  buttonClean: {
      backgroundColor: ColorsConfig.ink.buttonClean,
  },
  buttonCapture: {
      backgroundColor: ColorsConfig.ink.buttonCapture,
  },
}

export default Ink;
