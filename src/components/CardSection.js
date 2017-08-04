import React from 'react';
import { View } from 'react-native';
import { ColorsConfig } from './../configs';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 8,
    backgroundColor: ColorsConfig.cardSection.background,
    borderColor: ColorsConfig.cardSection.border,
    borderBottomWidth: 0,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
