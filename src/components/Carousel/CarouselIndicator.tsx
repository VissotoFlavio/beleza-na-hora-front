import React, { FC } from 'react';
import Animated, {
    Extrapolate,
    SharedValue,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StyleColorValues } from '../../theme';
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
      StyleColorValues.gray[300],
      StyleColorValues.gray[700],
      StyleColorValues.gray[300],
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
          backgroundColor: StyleColorValues.gray[700],
        },
        animatedStyle,
      ]}
    />
  );
};
