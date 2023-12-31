import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';
import { StyleColor } from './../../theme/color.style';

export const CardProfessionalStyle = StyleSheet.create({
  container: {
    width: hp(13),
    borderRadius: StyleBorder.radius.md,
    backgroundColor: StyleColor.white,
    shadowColor: StyleColor.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: StyleBorder.radius.md,
    elevation: 5,
  },
  image: {
    borderTopLeftRadius: StyleBorder.radius.md,
    borderTopRightRadius: StyleBorder.radius.md,
    height: hp(13),
    width: hp(13),
  },
  status: {
    height: hp(3),
    width: hp(3),
    position: 'absolute',
    bottom: -hp(1.5),
    right: 0,
    borderRadius: StyleBorder.radius.full,
    borderColor: StyleColor.white,
    borderWidth: 2,
  },
  online: {
    backgroundColor: StyleColor.green[500],
  },
  offline: {
    backgroundColor: StyleColor.red[500],
  },
  busy: {
    backgroundColor: StyleColor.yellow[500],
  },
  content: {
    paddingHorizontal: StyleSpacing.horizontal.md,
    paddingVertical: StyleSpacing.vertical.lg,
  },
  nameContainer: {
    overflow: 'hidden',
  },
  name: {
    width: wp(99),
    display: 'flex',
    fontWeight: 'bold',
  },
  specialty: {
    width: wp(99),
    fontSize: StyleFont.size.xs,
    color: StyleColor.gray[500],
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingStars: {
    flexDirection: 'row',
  },
  ratingValue: {
    paddingLeft: StyleSpacing.horizontal.md,
    fontSize: StyleFont.size.xs,
    fontWeight: '500',
  },
});
