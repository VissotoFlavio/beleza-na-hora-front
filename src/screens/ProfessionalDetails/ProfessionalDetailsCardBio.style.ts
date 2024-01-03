import { StyleSheet } from 'react-native';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';
import { HeaderProfileHeight } from './style';

export const StyleProfessionalDetailsCardBio = StyleSheet.create({
  container: {
    ...StyleBorder.shadow,
    shadowColor: StyleColorValues.blue[500],
    elevation: 10,
    // borderRadius: StyleBorder.radius.lg,
    backgroundColor: StyleColorValues.white,
    width: '100%',
  },
  containerPrincipal: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: StyleSpacing.horizontal['4xl'],
  },
  imageContainer: {},
  image: {
    height: HeaderProfileHeight,
    width: HeaderProfileHeight,
    // borderTopLeftRadius: StyleBorder.radius.lg,
    // borderBottomLeftRadius: StyleBorder.radius.lg,
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
    // backgroundColor: StyleColorValues.sky[200],
    borderTopEndRadius: StyleBorder.radius.full,
    borderBottomEndRadius: StyleBorder.radius.full,

    // left: -widthPercentageToDP(3),
    // paddingLeft: widthPercentageToDP(3),
  },
  specialityText: {
    fontWeight: 'bold',
    fontSize: StyleFont.size.md,
    color: StyleColorValues.sky[500],
  },
  iconContainer: {},
  deatilsToggle: {
    position: 'absolute',
    fontSize: StyleFont.size.sm,
    color: StyleColorValues.blue[700],
    fontWeight: 'bold',
    bottom: StyleSpacing.horizontal.lg,
    right: StyleSpacing.horizontal['6xl'],
    paddingHorizontal: StyleSpacing.horizontal.xl,
    paddingVertical: StyleSpacing.vertical.md,
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
