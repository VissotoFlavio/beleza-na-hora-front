import React from 'react';
import { Text } from 'react-native';
import { useCardProfessional } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export const CardProfessionalName = () => {
  const cardContext = useCardProfessional();

  return (
    <Text style={CardProfessionalStyle.name}>
      {cardContext.details.firstName} {cardContext.details.lastName}
    </Text>
  );
};
