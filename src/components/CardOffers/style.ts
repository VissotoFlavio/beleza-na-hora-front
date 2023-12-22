import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { StyleBorder } from '../../theme/border.style';

export const CardOffersStyle = StyleSheet.create({
  container: {
    borderRadius: StyleBorder.radius.lg,
    backgroundColor: StyleColorValues.white,
    shadowColor: StyleColorValues.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: StyleBorder.radius.md,
    elevation: 5,
  },
  image: {
    borderRadius: StyleBorder.radius.lg,
    height: heightPercentageToDP(20),
    width: heightPercentageToDP(40),
  },
});
