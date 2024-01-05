import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export const TabBarViewStyle = StyleSheet.create({
  tabbar: {
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: StyleFont.color.light,
  },
  item: {
    width: widthPercentageToDP(34),
    paddingVertical: StyleSpacing.vertical.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    color: StyleFont.color.default,
    fontWeight: 'bold',
  },
  icon: {
    height: 26,
    width: 26,
  },
  label: {
    fontSize: StyleFont.size.md,
    color: StyleFont.color.default,
  },
  activeLabel: {
    borderRadius: 50,
    backgroundColor: StyleColor.blue[300],
  },
  activeText: {
    color: StyleColor.blue[500],
    backgroundColor: StyleColor.blue[100],
    paddingVertical: StyleSpacing.vertical.md,
    marginVertical: -StyleSpacing.vertical.md,
    paddingHorizontal: StyleSpacing.horizontal['4xl'],
    marginHorizontal: -StyleSpacing.horizontal['4xl'],
    borderRadius: StyleBorder.radius.full,
    fontWeight: 'bold',
  },
});
