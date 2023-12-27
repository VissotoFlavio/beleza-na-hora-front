import React from 'react';
import { View } from 'react-native';
import { useCardProfessional } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export const CardProfessionalStatus = () => {
  const cardContext = useCardProfessional();

  return (
    <View
      style={[
        CardProfessionalStyle.status,
        CardProfessionalStyle[cardContext.details.status ?? 'offline'],
      ]}
    />
  );
};
