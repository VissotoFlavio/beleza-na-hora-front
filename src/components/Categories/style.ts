import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../theme';
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
    borderColor: StyleColor.gray[300],
    paddingHorizontal: StyleSpacing.horizontal['4xl'],
    paddingVertical: StyleSpacing.vertical.lg,
    marginHorizontal: StyleSpacing.horizontal.md,
    backgroundColor: StyleColor.white,
  },
  activated: {
    backgroundColor: StyleColor.pink[300],
  },
  activatedText: {
    color: StyleColor.black,
  },
});

export const StyleSubCategories = StyleSheet.create({
  container: {
    marginBottom: StyleSpacing.vertical.lg,
  },
  containerSub: {
    marginBottom: StyleSpacing.vertical.lg,
  },
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
  itemTouchable: {
    ...StyleBorder.shadow,
    flex: 1,
    marginRight: StyleSpacing.horizontal.lg * 2,
    backgroundColor: StyleColor.gray[100],
    width: widthPercentageToDP(50),
    borderRadius: StyleBorder.radius.md,
  },
  containerImagem: {
    display: 'flex',
    flexDirection: 'row',
  },
  imagem: {
    width: widthPercentageToDP(15),
    height: heightPercentageToDP(9),
    borderTopLeftRadius: StyleBorder.radius.md,
    borderBottomLeftRadius: StyleBorder.radius.md,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: widthPercentageToDP(35),
    paddingVertical: StyleSpacing.vertical.sm,
    paddingHorizontal: StyleSpacing.horizontal.md,
    // backgroundColor: hexToRgbA(StyleColorValues.red[500], 0.5),
  },
  name: {
    fontWeight: 'bold',
    fontSize: StyleFont.size.md,
    color: StyleColor.gray[700],
  },
  value: {
    fontSize: StyleFont.size.xs,
    color: StyleColor.gray[500],
    width: '100%',
  },
});
