import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor } from '../../theme';
import { StyleSpacing } from '../../theme/spacing.style';

export const HeaderProfileHeight = heightPercentageToDP(15);

export const ProfessionalDetailsScreenStyle = StyleSheet.create({
  loading: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: StyleColor.white,
  },
  scroll: {
    flex: 1,
    display: 'flex',
  },
  scrollContent: {
    display: 'flex',
    rowGap: StyleSpacing.vertical.lg,
  },
});
