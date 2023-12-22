import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const StyleSpacing = {
  vertical: {
    xs: hp(0.5),
    sm: hp(0.75),
    md: hp(1),
    lg: hp(1.25),
    xl: hp(1.5),
    '2xl': hp(1.75),
    '3xl': hp(2),
    '4xl': hp(2.25),
    '5xl': hp(2.5),
  },
  horizontal: {
    xs: wp(0.5),
    sm: wp(0.75),
    md: wp(1),
    lg: wp(1.25),
    xl: wp(1.5),
    '2xl': wp(1.75),
    '3xl': wp(2),
    '4xl': wp(2.25),
    '5xl': wp(2.5),
  },
} as const;

export type StyleSpacingVertical = keyof typeof StyleSpacing.vertical;
