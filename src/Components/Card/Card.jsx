import * as React from 'react';
import { View } from 'react-native';
import { CardStyles } from './CardStyle';


const Card = (props) => {
  return (
    <View
      style={
        !props.radius
          ? CardStyles.container
          : {
              ...CardStyles.container,
              borderRadius: props.radius,
            }
      }>
      {props.children}
    </View>
  );
};

export default Card;
