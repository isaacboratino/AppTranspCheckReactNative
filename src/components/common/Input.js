import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Colors } from '../../configs';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
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
  );
};

const styles = {
  inputStyle: {
    color: Colors.input.text,
    marginHorizontal: 16,
    fontSize: 18,
    lineHeight: 23,
    borderColor: Colors.input.border,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    flex: 1
  },
  labelStyle: {
    color: Colors.input.label,
    fontSize: 14,
    paddingLeft: 16,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
};

export { Input };
