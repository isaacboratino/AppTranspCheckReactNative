import React from 'react';
import {Text} from 'react-native';
import { ColorsConfig } from './../configs';

const Title = (props) => {
  return (
    <Text style={styles.textStyle}>
      {props.children}
    </Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: ColorsConfig.title.text,
    marginBottom: 10
  }
};

export {Title}
