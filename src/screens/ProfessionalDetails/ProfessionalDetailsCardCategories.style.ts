import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const StyleProfessionalDetailsCardCategories = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    backgroundColor: StyleColorValues.white,
    paddingVertical: StyleSpacing.vertical.md,
    // paddingHorizontal: StyleSpacing.horizontal['2xl'],
  },
  containerContent: {
    // paddingBottom: HeaderProfileHeight,
  },
  categoryContainer: {
    borderColor: StyleColorValues.gray[200],
    paddingVertical: StyleSpacing.vertical.md,
    paddingLeft: StyleSpacing.horizontal['2xl'],
    width: '100%',
  },
  categoryName: {
    fontSize: StyleFont.size.lg,
    fontWeight: 'bold',
    color: StyleColorValues.gray[600],
  },
  containerScroll: {},
  scroll: {
    display: 'flex',
    columnGap: 10,
  },
  scrollContent: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: StyleSpacing.horizontal.md,
  },
  subCategoryContainer: {
    // ...StyleBorder.shadow,
    // flex: 1,
    // marginRight: StyleSpacing.horizontal.lg * 2,
    // backgroundColor: StyleColorValues.gray[100],
    // // width: widthPercentageToDP(50),
    // width: Dimensions.get('window').width - 25,
    // borderRadius: StyleBorder.radius.md,
    // paddingVertical: StyleSpacing.vertical.lg,
    // paddingHorizontal: StyleSpacing.horizontal.lg,
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  subCategoryContent: {
    ...StyleBorder.shadow,
    height: heightPercentageToDP(11),
    display: 'flex',
    backgroundColor: StyleColorValues.gray[100],
  },
  subCategoryImage: {
    resizeMode: 'cover',
    height: heightPercentageToDP(11),
    width: widthPercentageToDP(20),
  },
  subCategoryName: {
    fontSize: StyleFont.size.md,
    color: StyleColorValues.gray[700],
    fontWeight: 'bold',
  },
  subCategoryContainerDescptions: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: StyleSpacing.horizontal.md,
    paddingVertical: StyleSpacing.vertical.md,
    rowGap: StyleSpacing.vertical.xs,
  },
  ratingContainer: {
    alignItems: 'center',
    columnGap: StyleSpacing.horizontal.md,
  },
  priceContainer: {
    columnGap: StyleSpacing.horizontal.md,
  },
});
