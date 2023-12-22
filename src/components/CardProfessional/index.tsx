import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ProfessionalModel } from '../../models/professional.model';
import { RatingStar } from '../RatingStar';
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
    <TouchableOpacity
      activeOpacity={0.7}
      style={CardProfessionalStyle.container}
      onPress={() => handlePress(props.details.id)}>
      <Image
        style={CardProfessionalStyle.image}
        alt={props.details.firstName}
        source={{
          uri: props.details.imageUrl,
        }}
      />
      <View style={CardProfessionalStyle.content}>
        <View style={CardProfessionalStyle.nameContainer}>
          <Text style={CardProfessionalStyle.name}>
            {props.details.firstName} {props.details.lastName}
          </Text>
          <Text style={CardProfessionalStyle.specialty}>{props.details.specialty}</Text>
        </View>
        <View style={CardProfessionalStyle.ratingContainer}>
          <View>
            <RatingStar value={props.details.rating} />
          </View>
          <Text style={CardProfessionalStyle.ratingValue}>{props.details.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
