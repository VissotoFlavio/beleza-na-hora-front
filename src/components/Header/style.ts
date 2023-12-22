import { StyleSheet } from 'react-native';
import { StyleSpacing } from '../../theme/spacing.style';

export const StyleHeader = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: StyleSpacing.vertical.lg,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'column',
  },
  textName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textWelcome: {
    fontSize: 16,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});
