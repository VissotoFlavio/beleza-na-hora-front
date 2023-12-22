import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const CardProfessionalStyle = StyleSheet.create({
  container: {
    width: hp(20),
    borderRadius: StyleBorder.radius.md,
    backgroundColor: StyleColorValues.white,
    shadowColor: StyleColorValues.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: StyleBorder.radius.md,
    elevation: 10,
  },
  image: {
    borderTopLeftRadius: StyleBorder.radius.md,
    borderTopRightRadius: StyleBorder.radius.md,
    height: hp(20),
    width: hp(20),
  },
  content: {
    paddingHorizontal: wp(1),
    paddingVertical: StyleSpacing.vertical.md,
  },
  nameContainer: {},
  name: {
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: StyleFont.size.xs,
    color: StyleColorValues.gray[500],
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingStars: {},
  ratingValue: {
    fontWeight: '500',
  },
});
