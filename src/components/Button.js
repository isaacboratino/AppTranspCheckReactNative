import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { ColorsConfig } from './../configs';

const Button = ({ onPress, children, style, iconLeft=null, iconRight=null }) => {

  const iconLeftIsVisible = iconLeft != null ? 100 : 0;
  const iconRightIsVisible = iconRight != null ? 100 : 0;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>

      <Image source={iconLeft || require('../../images/icon_maps_pointer.png')}
        style={[styles.iconLeft, {opacity:iconLeftIsVisible}]}
        resizeMode='contain' />

      <Text style={styles.textStyle}>
        {children}
      </Text>

      <Image source={iconRight || require('../../images/icon_maps_pointer.png')}
        style={[styles.iconRight, {opacity:iconRightIsVisible}]}
        resizeMode='contain' />

    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: ColorsConfig.button.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: ColorsConfig.button.border,
    marginTop: 16,
    paddingVertical: 16
  },
  textStyle: {
    color: ColorsConfig.button.text,
    fontSize: 16,
    fontWeight: '600',
  },
  iconLeft: {
    width:40,
    height:20,
    marginHorizontal: 5
  },
  iconRight: {
    width:40,
    height:20,
    marginHorizontal: 5,
  }
};

export { Button };
