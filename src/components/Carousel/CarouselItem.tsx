import { FC, ReactNode } from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { CarouselStyle, slideWidth } from './style';

export interface CarouselItemProps {
  children: ReactNode;
  scrollOffset: SharedValue<number>;
  index: number;
}

export const CarouselItem: FC<CarouselItemProps> = (props): JSX.Element => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = props.scrollOffset.value / slideWidth;
    const inputRange = [props.index - 1, props.index, props.index + 1];

    return {
      transform: [
        {
          scale: interpolate(input, inputRange, [0.5, 1, 0.5], Extrapolate.CLAMP),
        },
      ],
    };
  });
  return (
    <Animated.View key={props.index} style={[CarouselStyle.slideItem, animatedStyle]}>
      <View>{props.children}</View>
    </Animated.View>
  );
};
