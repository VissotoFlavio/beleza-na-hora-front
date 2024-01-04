import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../../theme';
import { StyleSpacing } from '../../../theme/spacing.style';

export const ProfessionalServicesStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleColor.gray[100],
    marginBottom: StyleSpacing.vertical.lg,
    paddingTop: StyleSpacing.vertical.lg,
    rowGap: StyleSpacing.vertical.md,
  },
  title: {
    fontSize: StyleFont.size.xl,
    fontWeight: 'bold',
    color: StyleFont.color.default,
  },
  categoryBox: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: StyleSpacing.vertical.lg,
  },
  categoryContainer: {},
  categoryTitleContainer: {
    marginBottom: StyleSpacing.vertical.md,
  },
  categoryTitle: {
    fontSize: StyleFont.size.lg,
    fontWeight: 'bold',
    color: StyleFont.color.default,
  },
  subcategoryContainer: {
    flex: 1,
    backgroundColor: StyleColor.white,
  },
  subcategoryImage: {
    flex: 0.25,
    height: heightPercentageToDP(10),
  },
  subcategoryContent: {
    flex: 0.71,
    flexDirection: 'column',
    paddingVertical: StyleSpacing.vertical.md,
  },
  subcategoryTitleContainer: {
    flex: 0.25,
  },
  subcategoryTitle: {
    fontSize: StyleFont.size.md,
    fontWeight: 'bold',
    // color: StyleFont.color.default,
    color: StyleColor.rose[500],
  },
  subcategoryInfosContainer: {
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
