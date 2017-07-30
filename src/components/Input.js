import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { ColorsConfig } from './../configs';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const {inputStyle, labelStyle, containerStyle, textContainerStyle} = styles;

  return (
    <View style={containerStyle}>
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
    color: ColorsConfig.input.text,
    fontSize: 18,
    lineHeight: 23,
    borderColor: ColorsConfig.input.border,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    flex: 1,
  },
  labelStyle: {
    color: ColorsConfig.input.label,
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
  }
};

export { Input };
