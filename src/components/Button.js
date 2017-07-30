import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ColorsConfig } from './../configs';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: ColorsConfig.button.text,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: ColorsConfig.button.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: ColorsConfig.button.border,
    marginTop: 16,
  }
};

export { Button };
