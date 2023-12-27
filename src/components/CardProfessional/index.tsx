import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ProfessionalModel } from '../../models/professional.model';
import { CardProfessionalImage } from './CardProfessionalImage';
import { CardProfessionalName } from './CardProfessionalName';
import { CardProfessionalRating } from './CardProfessionalRating';
import { CardProfessionalSpecialty } from './CardProfessionalSpecialty';
import { CardProfessionalStatus } from './CardProfessionalStatus';
import { CardProfessionalProvider } from './context/cardProfessional.context';
import { CardProfessionalStyle } from './style';

export interface CardProfessionalProps {
  details: ProfessionalModel;
  onPress?: (value: string) => void;
}

export const CardProfessional: FC<CardProfessionalProps> = (props): JSX.Element => {
  const handlePress = (value: string): void => {
    if (props.onPress) {
      props.onPress(value);
    }
  };

  return (
    <CardProfessionalProvider {...props}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={CardProfessionalStyle.container}
        onPress={() => handlePress(props.details.id)}>
        <View>
          <CardProfessionalImage />
          <CardProfessionalStatus />
        </View>
        <View style={CardProfessionalStyle.content}>
          <View style={CardProfessionalStyle.nameContainer}>
            <CardProfessionalName />
            <CardProfessionalSpecialty />
          </View>
          <View style={CardProfessionalStyle.ratingContainer}>
            <CardProfessionalRating />
          </View>
        </View>
      </TouchableOpacity>
    </CardProfessionalProvider>
  );
};
