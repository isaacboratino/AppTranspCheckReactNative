import React from 'react';
import ReactNative, { TextInput, View, Text, Image } from 'react-native';
import { ColorsConfig } from './../configs';

const InputIcon = ({ label, value, onChangeText, placeholder, secureTextEntry, icon, isEditable}) => {

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
          editable={isEditable}
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
