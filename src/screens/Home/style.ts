import { StyleSheet } from 'react-native';
import { StyleColorValues, StyleFontTitle } from '../../theme';

export const HomeScreenStyle = StyleSheet.create({
  professionalTitles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkSeeAll: {
    ...StyleFontTitle.sm,
    color: StyleColorValues.blue[700],
    fontWeight: 'bold',
  },
});
