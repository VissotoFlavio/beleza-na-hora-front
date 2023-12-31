import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const StyleProfessionalDetailsCardBio = StyleSheet.create({
  container: {
    ...StyleBorder.shadow,
    shadowColor: StyleColorValues.blue[500],
    elevation: 10,
    borderRadius: StyleBorder.radius.lg,
    backgroundColor: StyleColorValues.white,
    width: '100%',
  },
  containerPrincipal: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: widthPercentageToDP(3),
  },
  imageContainer: {},
  image: {
    height: heightPercentageToDP(15),
    width: heightPercentageToDP(15),
    borderTopLeftRadius: StyleBorder.radius.lg,
    borderBottomLeftRadius: StyleBorder.radius.lg,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: StyleSpacing.vertical.md,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: StyleFont.size.xs,
  },
  nameContainer: {},
  nameText: {
    fontWeight: 'bold',
    fontSize: StyleFont.size['2xl'],
  },
  experienceContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: StyleSpacing.horizontal.md,
    paddingBottom: StyleSpacing.vertical.md,
  },
  experienceValue: {
    color: StyleColorValues.gray[500],
  },
  experienceText: {
    color: StyleColorValues.gray[500],
  },
  specialityContainer: {
    backgroundColor: StyleColorValues.sky[200],
    borderTopEndRadius: StyleBorder.radius.full,
    borderBottomEndRadius: StyleBorder.radius.full,

    left: -widthPercentageToDP(3),
    paddingLeft: widthPercentageToDP(3),
  },
  specialityText: {
    fontWeight: 'bold',
    fontSize: StyleFont.size.md,
    color: StyleColorValues.sky[500],
  },
  iconContainer: {
    backgroundColor: 'red',
  },
  iconArrow: {
    position: 'absolute',
    color: StyleColorValues.gray[800],
    bottom: StyleSpacing.horizontal.lg,
    right: StyleSpacing.horizontal['6xl'],
  },
  containerSecondary: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: StyleSpacing.vertical.xs,
    padding: StyleSpacing.horizontal['5xl'],
  },
  sinceContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: StyleSpacing.horizontal.md,
  },
  sinceValue: {
    fontWeight: 'bold',
  },
});
