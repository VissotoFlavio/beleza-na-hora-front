import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColor } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleFont } from './../../theme/font.style';

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
    borderColor: StyleColor.gray[500],
    borderRadius: StyleBorder.radius.sm,
    width: hp(3),
    height: hp(3),
  },
  checked: {
    backgroundColor: StyleColor.blue[500],
  },
  label: {
    fontSize: StyleFont.size.md,
    color: StyleColor.blue[500],
    fontWeight: '700',
    paddingLeft: wp(2),
  },
  labelErrorContainer: {
    width: '100%',
    bottom: 0,
  },
  labelErrorText: {
    color: StyleColor.red[500],
    paddingLeft: wp(2),
    fontSize: StyleFont.size.md,
  },
});
