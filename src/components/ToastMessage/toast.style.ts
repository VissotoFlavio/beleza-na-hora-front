import { StyleSheet } from 'react-native';
import { StyleColorValues, StyleFontValues } from '../../theme';

export const ToastMessageStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
    width: '90%',
    height: 100,
    backgroundColor: StyleColorValues.white,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  success: {
    backgroundColor: StyleColorValues.green[500],
  },
  danger: {
    backgroundColor: StyleColorValues.red[500],
  },
  info: {
    backgroundColor: StyleColorValues.blue[500],
  },
  warning: {
    backgroundColor: StyleColorValues.yellow[500],
  },
  content: {
    width: '100%',
    marginLeft: 12,
  },
  title: {
    fontSize: StyleFontValues.size.xl,
    fontWeight: '600',
    color: StyleColorValues.white,
  },
  description: {
    fontSize: StyleFontValues.size.md,
    fontWeight: '400',
    color: StyleColorValues.white,
  },
});
