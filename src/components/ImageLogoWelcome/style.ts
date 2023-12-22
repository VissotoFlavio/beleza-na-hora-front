import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
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
    borderRadius: StyleBorder.radius.full,
    backgroundColor: hexToRgbA(StyleColorValues.blue[300], 0.5),
  },
  circle2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(40),
    height: hp(40),
    borderRadius: StyleBorder.radius.full,
    backgroundColor: hexToRgbA(StyleColorValues.blue[300], 0.5),
  },
});
