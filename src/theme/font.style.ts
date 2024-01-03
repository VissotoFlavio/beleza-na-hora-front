import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const StyleFont = {
  title: {},
  size: {
    xs: hp(1.5),
    sm: hp(1.75),
    md: hp(2),
    lg: hp(2.5),
    xl: hp(2.75),
    '2xl': hp(3),
    '3xl': hp(3.5),
  },
} as const;

export type FontSize = keyof typeof StyleFont.size;

export const StyleFontSize = StyleSheet.create({
  xs: { fontSize: StyleFont.size.xs },
  sm: { fontSize: StyleFont.size.sm },
  md: { fontSize: StyleFont.size.md },
  lg: { fontSize: StyleFont.size.lg },
  xl: { fontSize: StyleFont.size.xl },
  '2xl': { fontSize: StyleFont.size['2xl'] },
});

export const StyleFontTitle = StyleSheet.create({
  xs: { fontSize: StyleFont.size.xs, fontWeight: 'bold' },
  sm: { fontSize: StyleFont.size.sm, fontWeight: 'bold' },
  md: { fontSize: StyleFont.size.md, fontWeight: 'bold' },
  lg: { fontSize: StyleFont.size.lg, fontWeight: 'bold' },
  xl: { fontSize: StyleFont.size.xl, fontWeight: 'bold' },
  '2xl': { fontSize: StyleFont.size['2xl'] },
});
