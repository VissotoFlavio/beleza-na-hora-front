import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleColorValues } from './color.style';
import { StyleSpacing } from './spacing.style';

export const StyleBorder = {
  radius: {
    sm: hp(1),
    md: hp(2),
    lg: hp(3),
    full: 9999,
  },
  shadow: {
    shadowColor: StyleColorValues.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    marginRight: StyleSpacing.horizontal.lg * 2,
    marginVertical: StyleSpacing.horizontal.lg,
    elevation: hp(0.35),
  },
};
