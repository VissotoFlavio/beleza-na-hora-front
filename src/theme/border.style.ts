import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleColor } from './color.style';

export const StyleBorder = {
  radius: {
    sm: hp(1),
    md: hp(2),
    lg: hp(3),
    full: 9999,
  },
  shadow: {
    shadowColor: StyleColor.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    elevation: hp(0.35),
  },
};
