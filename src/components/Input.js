import React from 'react';
import ReactNative, { TextInput, View, Text, Image } from 'react-native';
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
    borderBottomWidth: ReactNative.Platform.OS === 'ios' ? 1 : 0,
    alignSelf: 'stretch',
    flex: 1,
  },
  labelStyle: {
    color: ColorsConfig.input.label,
    fontSize: ReactNative.Platform.OS === 'ios' ? 14 : 12,
    flex: 1,
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flex: 1,
  },
  containerStyle: {
    
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  }
};

export { Input };
