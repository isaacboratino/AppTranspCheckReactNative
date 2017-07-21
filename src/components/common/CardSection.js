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
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: Colors.cardSection.background,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center';
    borderColor: Colors.cardSection.border
  }
};

export { CardSection };
