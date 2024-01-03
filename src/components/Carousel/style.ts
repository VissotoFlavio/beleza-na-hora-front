import { Dimensions, StyleSheet } from 'react-native';
import { StyleSpacing } from '../../theme/spacing.style';

const { width, height } = Dimensions.get('screen');
export const slideWidth = width;

export const CarouselStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  slide: {
    display: 'flex',
    flexDirection: 'row',
  },
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideItem: {
    flex: 1,
    width: slideWidth,
  },
  slideIndicator: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: StyleSpacing.vertical.xs,
  },
});
