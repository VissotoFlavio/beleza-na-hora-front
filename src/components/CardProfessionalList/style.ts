import { StyleSheet } from 'react-native';
import { StyleColorValues } from '../../theme';
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
