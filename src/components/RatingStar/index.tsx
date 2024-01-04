import { Star } from 'lucide-react-native';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { FontSize, StyleColor, StyleFont } from '../../theme';
import { RatingStarStyle } from './style';

export interface RatingStarProps {
  value: number;
  size?: FontSize;
}
export const RatingStar: FC<RatingStarProps> = (props): JSX.Element => {
  const [rating, setRating] = useState(props.value);
  const size = props.size ? StyleFont.size[props.size] : StyleFont.size.xs;
  return (
    <View style={RatingStarStyle.container}>
      {[...Array(5)].map((star: number, index: number) => {
        index += 1;
        const color =
          props.value >= index ? StyleColor.yellow[400] : StyleColor.gray[400];
        return (
          <View key={index}>
            <Star fill={color} size={size} />
          </View>
        );
      })}
    </View>
  );
};
