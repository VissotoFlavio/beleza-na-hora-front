import { StyleSheet } from 'react-native';
import { StyleColor, StyleFontTitle } from '../../theme';

export const HomeScreenStyle = StyleSheet.create({
  professionalTitles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkSeeAll: {
    ...StyleFontTitle.sm,
    color: StyleColor.blue[700],
    fontWeight: 'bold',
  },
});
