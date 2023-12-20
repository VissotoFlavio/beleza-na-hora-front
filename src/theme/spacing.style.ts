import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
} as const;

export type StyleSpacingVertical = keyof typeof StyleSpacing.vertical;
