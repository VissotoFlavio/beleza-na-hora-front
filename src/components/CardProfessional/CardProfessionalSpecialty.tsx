import React from 'react';
import { Text } from 'react-native';
import { useCardProfessional } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export const CardProfessionalSpecialty = () => {
  const cardContext = useCardProfessional();

  return <Text style={CardProfessionalStyle.specialty}>{cardContext.details.specialty}</Text>;
};
