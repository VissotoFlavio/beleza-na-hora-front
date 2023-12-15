import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { BorderStyle } from '../../theme/border.style';
import { hexToRgbA } from '../../utils/hexaToRbga';

export const ImageLogoStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(46),
    height: hp(46),
    borderRadius: BorderStyle.radius.full,
    backgroundColor: hexToRgbA(StyleColorValues.pink[300], 0.5),
  },
  circle2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(40),
    height: hp(40),
    borderRadius: BorderStyle.radius.full,
    backgroundColor: hexToRgbA(StyleColorValues.pink[300], 0.5),
  },
});
