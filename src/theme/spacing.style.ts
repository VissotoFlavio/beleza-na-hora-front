import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const StyleSpacing = {
  vertical: {
    xs: hp(0.5),
    sm: hp(0.75),
    md: hp(1),
    lg: hp(1.5),
    xl: hp(1.75),
    '2xl': hp(2),
    '3xl': hp(2.5),
    '4xl': hp(3),
    '5xl': hp(3.5),
    '6xl': hp(4),
    '7xl': hp(4.5),
  },
  horizontal: {
    xs: wp(0.5),
    sm: wp(0.75),
    md: wp(1),
    lg: wp(1.5),
    xl: wp(1.75),
    '2xl': wp(2),
    '3xl': wp(2.5),
    '4xl': wp(3),
    '5xl': wp(3.5),
    '6xl': wp(4),
    '7xl': wp(4.5),
  },
} as const;

export type StyleSpacingVertical = keyof typeof StyleSpacing.vertical;
