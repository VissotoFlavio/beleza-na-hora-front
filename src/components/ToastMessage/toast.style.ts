import { StyleSheet } from 'react-native';
import { StyleColor, StyleFont } from '../../theme';

export const ToastMessageStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
    width: '90%',
    height: 100,
    backgroundColor: StyleColor.white,
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
    backgroundColor: StyleColor.green[500],
  },
  danger: {
    backgroundColor: StyleColor.red[500],
  },
  info: {
    backgroundColor: StyleColor.blue[500],
  },
  warning: {
    backgroundColor: StyleColor.yellow[500],
  },
  content: {
    width: '100%',
    marginLeft: 12,
  },
  title: {
    fontSize: StyleFont.size.xl,
    fontWeight: '600',
    color: StyleColor.white,
  },
  description: {
    fontSize: StyleFont.size.md,
    fontWeight: '400',
    color: StyleColor.white,
  },
});
