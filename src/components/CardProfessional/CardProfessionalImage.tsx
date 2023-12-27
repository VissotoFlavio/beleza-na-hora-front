import React from 'react';
import { Image } from 'react-native';
import { useCardProfessional } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export const CardProfessionalImage = () => {
  const cardContext = useCardProfessional();

  return (
    <Image
      style={CardProfessionalStyle.image}
      alt={cardContext.details.firstName}
      source={{
        uri: cardContext.details.imageUrl,
      }}
    />
  );
};
