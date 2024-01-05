import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

const DIMENSIONS = Dimensions.get('window');
export const SHEET_HEIGHT = (DIMENSIONS.height / 5) * 4;
export const SHEET_OVER_DRAG = 20;

export const BottomSheetStyle = StyleSheet.create({
  bg: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleBorder.shadow,
    height: SHEET_HEIGHT,
    width: DIMENSIONS.width,
    backgroundColor: StyleColor.gray[50],
    // backgroundColor: StyleColor.gray[500],
    position: 'absolute',
    bottom: -SHEET_OVER_DRAG * 1.2,
    zIndex: 9999,
    borderTopRightRadius: StyleBorder.radius.lg,
    borderTopLeftRadius: StyleBorder.radius.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(5),
  },
  dragIcon: {
    display: 'flex',
  },
  containerClose: {
    position: 'absolute',
    right: StyleSpacing.horizontal['5xl'],
  },
});
