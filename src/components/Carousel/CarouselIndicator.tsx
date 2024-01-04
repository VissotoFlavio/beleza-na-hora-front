import React, { FC } from 'react';
import Animated, {
    Extrapolate,
    SharedValue,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColor } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { slideWidth } from './style';

export interface CarouselIndicatorProps {
  scrollOffset: SharedValue<number>;
  index: number;
}

export const CarouselIndicator: FC<CarouselIndicatorProps> = (props): JSX.Element => {
  const valueHeightDot = heightPercentageToDP(1);

  const animatedStyle = useAnimatedStyle(() => {
    const input = props.scrollOffset.value / slideWidth;
    const inputRange = [props.index - 1, props.index, props.index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      StyleColor.gray[300],
      StyleColor.gray[700],
      StyleColor.gray[300],
    ]);

    return {
      width: interpolate(
        input,
        inputRange,
        [valueHeightDot, valueHeightDot * 2, valueHeightDot],
        Extrapolate.CLAMP,
      ),
      backgroundColor: animatedColor,
    };
  });

  return (
    <Animated.View
      style={[
        {
          marginHorizontal: widthPercentageToDP(1),
          height: valueHeightDot,
          borderRadius: StyleBorder.radius.full,
          backgroundColor: StyleColor.gray[700],
        },
        animatedStyle,
      ]}
    />
  );
};
