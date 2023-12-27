import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const StyleCategories = StyleSheet.create({
  scroll: {
    paddingHorizontal: 0,
  },
  container: {
    marginBottom: StyleSpacing.vertical.lg,
  },
  item: {
    borderWidth: 1,
    borderRadius: StyleBorder.radius.sm,
    borderColor: StyleColorValues.gray[300],
    paddingHorizontal: StyleSpacing.horizontal['4xl'],
    paddingVertical: StyleSpacing.vertical.lg,
    marginHorizontal: StyleSpacing.horizontal.md,
  },
  activated: {
    backgroundColor: StyleColorValues.pink[300],
  },
  activatedText: {
    color: StyleColorValues.black,
  },
});

export const StyleSubCategories = StyleSheet.create({
  container: {
    marginBottom: StyleSpacing.vertical.lg,
  },
  containerSub: {},
  title: {
    fontSize: StyleFont.size.lg,
    fontWeight: 'bold',
  },
  containerScroll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {},
  item: {
    height: heightPercentageToDP(15),
    width: heightPercentageToDP(9),
    marginBottom: heightPercentageToDP(1),
    marginHorizontal: StyleSpacing.horizontal.lg,
    borderRadius: StyleBorder.radius.sm,
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
  img: {
    height: heightPercentageToDP(9),
    width: heightPercentageToDP(9),
    borderTopLeftRadius: StyleBorder.radius.sm,
    borderTopRightRadius: StyleBorder.radius.sm,
  },
  activated: {
    backgroundColor: StyleColorValues.pink[300],
  },
  activatedText: {
    color: StyleColorValues.black,
  },
});
