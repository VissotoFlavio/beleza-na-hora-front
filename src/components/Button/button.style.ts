import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColorValues, StyleFontValues } from '../../theme';

export const StyleButton = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: hp(1.2),
  },
  disabled: {
    opacity: 0.5,
  },
  loading: {
    paddingRight: wp(2),
  },
  black: {
    backgroundColor: StyleColorValues.black,
  },
  blue: {
    backgroundColor: StyleColorValues.blue[500],
  },
  red: {
    backgroundColor: StyleColorValues.red[500],
  },
  green: {
    backgroundColor: StyleColorValues.green[500],
  },
  'label-black': {
    color: StyleColorValues.black,
  },
  'label-blue': {
    color: StyleColorValues.white,
  },
  'label-red': {
    color: StyleColorValues.white,
  },
  'label-green': {
    color: StyleColorValues.white,
  },
});

export const StyleButtonOutline = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColorValues.white,
    borderWidth: 2,
  },
  disabled: StyleButton.disabled,
  black: {
    borderColor: StyleColorValues.black,
  },
  blue: {
    borderColor: StyleColorValues.blue[500],
  },
  red: {
    borderColor: StyleColorValues.red[500],
  },
  green: {
    borderColor: StyleColorValues.green[500],
  },
  text: {
    fontSize: StyleFontValues.size.md,
  },
});

export const StyleButtonFacebook = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColorValues.blue[500],
    borderRadius: 8,
  },
  disabled: StyleButton.disabled,
  logo: {
    height: hp(3.5),
    width: hp(3.5),
  },
  label: {
    color: StyleColorValues.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: wp(2),
    fontSize: StyleFontValues.size['2xl'],
  },
});

export const StyleButtonGoogle = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColorValues.red[500],
    borderRadius: 8,
  },
  disabled: StyleButton.disabled,
  logoBackground: {
    // backgroundColor: Colors.red[700],
    borderRadius: 50,
  },
  logo: {
    height: hp(3.5),
    width: hp(3.5),
  },
  label: {
    color: StyleColorValues.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: wp(2),
    fontSize: StyleFontValues.size['2xl'],
  },
});
