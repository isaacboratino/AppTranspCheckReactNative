import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../configs';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.card.border,
    borderBottomWidth: 0,
    shadowColor: Colors.card.shadow,
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 16,
    marginTop: 20
  }
};

export { Card };
