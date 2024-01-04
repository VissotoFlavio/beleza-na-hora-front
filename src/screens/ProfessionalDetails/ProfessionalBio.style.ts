import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

const HEIGHT_IMAGE_PROFILE = heightPercentageToDP(15);

export const ProfessionalBioStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: StyleSpacing.vertical.lg,
  },
  imageBg: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: heightPercentageToDP(20),
    width: '100%',
    resizeMode: 'cover',
  },
  imageProfile: {
    height: HEIGHT_IMAGE_PROFILE,
    width: HEIGHT_IMAGE_PROFILE,
    bottom: -HEIGHT_IMAGE_PROFILE / 2,
    borderRadius: StyleBorder.radius.full,
    resizeMode: 'cover',
  },
  nameAndSpecialtyContainer: {
    marginTop: HEIGHT_IMAGE_PROFILE / 2,
  },
  name: {
    color: StyleFont.color.default,
    fontSize: StyleFont.size['3xl'],
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: StyleFont.size.lg,
    color: StyleFont.color.light,
  },
  highlightBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: StyleColor.gray[200],
  },
  highlightBoxContent: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  highlightBoxValue: {
    color: StyleFont.color.default,
    fontWeight: 'bold',
    fontSize: StyleFont.size['4xl'],
  },
  highlightBoxText: {
    color: StyleFont.color.light,
    fontSize: StyleFont.size.xs,
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: StyleColor.gray[200],
    paddingTop: StyleSpacing.vertical.md,
  },
  descriptionText: {
    color: StyleFont.color.default,
    textAlign: 'justify',
  },
});
