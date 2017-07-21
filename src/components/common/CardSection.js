import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../configs';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 8,
    backgroundColor: Colors.cardSection.background,
    borderColor: Colors.cardSection.border,
    borderBottomWidth: 0,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
