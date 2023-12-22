import { Star } from 'lucide-react-native';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { StyleColorValues } from '../../theme';
import { RatingStarStyle } from './style';

export interface RatingStarProps {
  value: number;
}
export const RatingStar: FC<RatingStarProps> = (props): JSX.Element => {
  const [rating, setRating] = useState(props.value);

  return (
    <View style={RatingStarStyle.container}>
      {[...Array(5)].map((star: number, index: number) => {
        index += 1;
        const color =
          props.value >= index ? StyleColorValues.yellow[400] : StyleColorValues.gray[400];
        return (
          <View key={index}>
            <Star fill={color} />
          </View>
        );
      })}
    </View>
  );
};
