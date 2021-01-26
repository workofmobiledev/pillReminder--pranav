import { StyleSheet } from 'react-native';
import color from '../../common/style/color';
import { standardGapSmall } from '../../common/style/Standard';

export const CardStyles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    shadowColor: color.black,
    marginBottom: standardGapSmall,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
