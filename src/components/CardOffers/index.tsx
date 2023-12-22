import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { OfferModel } from '../../models/offer.model';
import { CardOffersStyle } from './style';

export interface CardOffersProps {
  details: OfferModel;
  onPress?: (value: string) => void;
}

export const CardOffers: FC<CardOffersProps> = (props): JSX.Element => {
  const handlePress = (value: string): void => {
    if (props.onPress) {
      props.onPress(value);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handlePress(props.details.id)}
      style={CardOffersStyle.container}>
      <Image
        style={CardOffersStyle.image}
        alt={props.details.description}
        source={props.details.imageUrl}
      />
    </TouchableOpacity>
  );
};
