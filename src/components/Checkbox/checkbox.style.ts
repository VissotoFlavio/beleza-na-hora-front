import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { BorderStyle } from '../../theme/border.style';
import { StyleFontValues } from './../../theme/font.style';

export const CheckboxStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  invalid: {
    marginVertical: hp(0.5),
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxIcon: {
    borderWidth: 1,
    borderColor: StyleColorValues.gray[500],
    borderRadius: BorderStyle.radius.sm,
    width: hp(3),
    height: hp(3),
  },
  checked: {
    backgroundColor: StyleColorValues.blue[500],
  },
  label: {
    fontSize: StyleFontValues.size.md,
    color: StyleColorValues.blue[500],
    fontWeight: '700',
    paddingLeft: wp(2),
  },
  labelErrorContainer: {
    width: '100%',
    bottom: 0,
  },
  labelErrorText: {
    color: StyleColorValues.red[500],
    paddingLeft: wp(2),
    fontSize: StyleFontValues.size.md,
  },
});
