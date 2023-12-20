import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { BorderStyle } from '../../theme/border.style';
import { StyleFontValues } from '../../theme/font.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const InputTextStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: StyleSpacing.vertical['5xl'],
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: StyleColorValues.white,
    borderWidth: 1,
    borderColor: StyleColorValues.gray[400],
    borderRadius: BorderStyle.radius.lg,
  },
  icon: {
    borderRadius: BorderStyle.radius.full,
    paddingLeft: wp(2),
  },
  ContainerInput: {
    flex: 1,
  },
  text: {
    fontSize: StyleFontValues.size.md,
    letterSpacing: 0.1,
    paddingVertical: StyleSpacing.vertical.md,
    paddingLeft: wp(2),
  },
  iconEnd: {
    paddingRight: wp(2),
  },
  labelErrorContainer: {
    width: '100%',
    position: 'absolute',
    bottom: -StyleSpacing.vertical['5xl'],
  },
  labelErrorText: {
    color: StyleColorValues.red[500],
    paddingLeft: wp(2),
    fontSize: StyleFontValues.size.md,
  },
});
