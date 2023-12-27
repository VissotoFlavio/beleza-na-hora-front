import { Star } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { StyleColorValues, StyleFont } from '../../theme';
import { useCardProfessional } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export const CardProfessionalRating = () => {
  const cardContext = useCardProfessional();
  return (
    <>
      <View style={CardProfessionalStyle.ratingStars}>
        {[...Array(5)].map((star: number, index: number) => {
          index += 1;
          const color =
            cardContext.details.rating >= index
              ? StyleColorValues.yellow[400]
              : StyleColorValues.gray[400];
          return (
            <View key={index}>
              <Star fill={color} size={StyleFont.size.xs} />
            </View>
          );
        })}
      </View>
      <Text style={CardProfessionalStyle.ratingValue}>({cardContext.details.rating})</Text>
    </>
  );
};
