import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../theme';

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
    backgroundColor: StyleColor.black,
  },
  blue: {
    backgroundColor: StyleColor.blue[500],
  },
  red: {
    backgroundColor: StyleColor.red[500],
  },
  green: {
    backgroundColor: StyleColor.green[500],
  },
  'label-black': {
    color: StyleColor.black,
  },
  'label-blue': {
    color: StyleColor.white,
  },
  'label-red': {
    color: StyleColor.white,
  },
  'label-green': {
    color: StyleColor.white,
  },
});

export const StyleButtonOutline = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColor.white,
    borderWidth: 2,
  },
  disabled: StyleButton.disabled,
  black: {
    borderColor: StyleColor.black,
  },
  blue: {
    borderColor: StyleColor.blue[500],
  },
  red: {
    borderColor: StyleColor.red[500],
  },
  green: {
    borderColor: StyleColor.green[500],
  },
  text: {
    fontSize: StyleFont.size.md,
  },
});

export const StyleButtonFacebook = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColor.blue[500],
    borderRadius: 8,
  },
  disabled: StyleButton.disabled,
  logo: {
    height: hp(3.5),
    width: hp(3.5),
  },
  label: {
    color: StyleColor.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: wp(2),
    fontSize: StyleFont.size['2xl'],
  },
});

export const StyleButtonGoogle = StyleSheet.create({
  container: StyleButton.container,
  button: {
    ...StyleButton.button,
    backgroundColor: StyleColor.red[500],
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
    color: StyleColor.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: wp(2),
    fontSize: StyleFont.size['2xl'],
  },
});
