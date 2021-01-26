import * as React from 'react';
import { Text } from 'react-native';
import font from '../../common/style/font';


const FontText = (props) => {
  const { fontType, fontSize, color } = props;
  return (
    <Text
      style={{
        fontFamily: "AvenirNextLTPro",
        fontSize,
        color,
      }}
      onPress={props.onClick}>
      {props.text}
    </Text>
  );
};

export default FontText;
