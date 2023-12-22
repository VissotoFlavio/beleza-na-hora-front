import { StyleSheet } from 'react-native';
import { StyleSpacing } from '../../theme/spacing.style';

export const CardOffersListStyle = StyleSheet.create({
  container: {},
  scroll: {},
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: StyleSpacing.horizontal.lg,
    paddingVertical: StyleSpacing.vertical.xl,
  },
});
