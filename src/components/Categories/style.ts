import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
import { StyleBorder } from '../../theme/border.style';

export const StyleCategories = StyleSheet.create({
  scroll: {
    paddingHorizontal: 0,
  },
  container: {
    width: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: wp(24),
    marginBottom: hp(0),
    paddingHorizontal: wp(1),
  },
  description: {
    flexGrow: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    width: hp(7),
    height: hp(7),
    borderRadius: StyleBorder.radius.full,
    backgroundColor: StyleColorValues.transparent,
  },
  activated: {
    backgroundColor: StyleColorValues.pink[400],
  },
});
