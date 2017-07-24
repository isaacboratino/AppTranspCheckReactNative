import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { Colors } from '../../configs';

const InputIcon = ({ label, value, onChangeText, placeholder, secureTextEntry, icon }) => {

  const {inputStyle, labelStyle, containerStyle, textContainerStyle, imageStyle} = styles;

  return (
    <View style={containerStyle}>

      <Image source={icon} style={imageStyle} resizeMode='contain'></Image>

      <View style={textContainerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

    </View>
  );
};

const styles = {
  inputStyle: {
    color: Colors.input.text,
    fontSize: 18,
    lineHeight: 23,
    borderColor: Colors.input.border,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    flex: 1,
  },
  labelStyle: {
    color: Colors.input.label,
    fontSize: 14,
    flex: 1,
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  imageStyle: {
    width:40,
    height:40,
    margin: 10,
    alignSelf: 'center',
  }
};

export { InputIcon };
