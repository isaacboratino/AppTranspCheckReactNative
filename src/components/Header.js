// Import libraries for making a component
import React from 'react';
import ReactNative, { Text, View, Image } from 'react-native';
import { ColorsConfig } from './../configs';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image source={require('../../images/header_logo.png')}
             style={imageStyle}
             resizeMode='contain'></Image>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: ColorsConfig.header.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 45,
    marginTop: ReactNative.Platform.OS === 'ios' ? 20 : 0,
    shadowColor: ColorsConfig.header.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsConfig.header.title
  },
  imageStyle: {
    marginHorizontal: 10,
    width: 40
  }
};

// Make the component available to other parts of the app
export { Header };
