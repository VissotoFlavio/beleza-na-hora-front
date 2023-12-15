import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const StyleFontValues = {
  size: {
    xs: hp(1.5),
    sm: hp(1.75),
    md: hp(2),
    lg: hp(2.5),
    xl: hp(2.75),
    '2xl': hp(3),
  },
} as const;

export type FontSize = keyof typeof StyleFontValues.size;

export const StyleFontSize = StyleSheet.create({
  xs: { fontSize: StyleFontValues.size.xs },
  sm: { fontSize: StyleFontValues.size.sm },
  md: { fontSize: StyleFontValues.size.md },
  lg: { fontSize: StyleFontValues.size.lg },
  xl: { fontSize: StyleFontValues.size.xl },
  '2xl': { fontSize: StyleFontValues.size['2xl'] },
});
