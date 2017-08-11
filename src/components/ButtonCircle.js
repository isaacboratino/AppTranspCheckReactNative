import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { ColorsConfig } from './../configs';

const ButtonCircle = ({ onPress, children, style, icon=null}) => {

  const iconIsVisible = icon != null ? 'block' : 'none';

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>

      <Image source={icon || require('../../images/icon_maps_pointer.png')}
        style={[styles.icon, {display:iconIsVisible}]}
        resizeMode='contain' />

      <Text style={styles.text}>
        {children}
      </Text>

    </TouchableOpacity>
  );
};

const styles = {
  button: {
    alignItems:'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 70,
    width: 70,
    backgroundColor: ColorsConfig.button.background,
    borderColor: ColorsConfig.button.border,
  },
  text: {
    color: ColorsConfig.button.text,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {
    width:40,
    height:20,
  },
};

export { ButtonCircle };
