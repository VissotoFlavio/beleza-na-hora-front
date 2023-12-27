import { StyleSheet } from 'react-native';

import { StyleColorValues } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const CardProfessionalStyle = StyleSheet.create({
  container: {
    backgroundColor: StyleColorValues.transparent,
  },
  scroll: {
    backgroundColor: StyleColorValues.transparent,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: StyleSpacing.horizontal.lg,
    paddingVertical: StyleSpacing.vertical.xl,
  },
});

export const CardProfessionalCategoriesStyle = StyleSheet.create({
  container: {},
  item: {
    borderWidth: 1,
    paddingHorizontal: StyleSpacing.horizontal['6xl'],
    paddingVertical: StyleSpacing.vertical.sm,
    marginRight: StyleSpacing.horizontal['3xl'],
    borderRadius: StyleBorder.radius.sm,
  },
});
