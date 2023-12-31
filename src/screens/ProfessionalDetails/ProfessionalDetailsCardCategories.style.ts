import { StyleSheet } from 'react-native';
import { StyleColorValues } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const StyleProfessionalDetailsCardCategories = StyleSheet.create({
  container: {
    ...StyleBorder.shadow,
    shadowColor: StyleColorValues.blue[500],
    elevation: 5,
    display: 'flex',
    borderRadius: StyleBorder.radius.lg,
    backgroundColor: StyleColorValues.white,
    paddingVertical: StyleSpacing.vertical['5xl'],
  },
});
