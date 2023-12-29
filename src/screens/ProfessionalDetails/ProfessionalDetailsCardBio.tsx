import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { RatingStar } from '../../components/RatingStar';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { StyleProfessionalDetailsCardBio as style } from './ProfessionalDetailsCardBio.style';

export interface ProfessionalDetailsCardBioProps {
  details: ProfessionalDetailsModel;
}

export const ProfessionalDetailsCardBio: FC<ProfessionalDetailsCardBioProps> = (
  props,
): JSX.Element => {
  const formatNumberServices = (value: number): string => {
    return '1.2 K';
  };

  const formatWorkingSice = (value: number): string => {
    return 'Janeiro 2022';
  };

  return (
    <View style={style.container}>
      {/* Rating Stars */}
      <View style={style.containerRating}>
        <RatingStar value={props.details.rating} size="xl" />
      </View>

      {/* Name and experience */}
      <View style={style.containerNameExp}>
        <View style={style.containerName}>
          <Text style={style.textName}>
            {props.details.firstName + ' ' + props.details.lastName}
          </Text>
          <Text style={style.specialty}>{props.details.specialty}</Text>
        </View>
        <View style={style.containerExp}>
          <View style={style.experience}>
            <Text style={style.experienceValue}>
              {formatNumberServices(props.details.numberOfServices)}
            </Text>
            <Text style={style.experienceText}>Serviços realizados</Text>
          </View>
          <View style={style.experience}>
            <Text style={style.experienceValue}>
              {formatWorkingSice(props.details.workingSince)}
            </Text>
            <Text style={style.experienceText}>Experiencia no app</Text>
          </View>
          <View style={style.experience}>
            <Text style={style.experienceValue}>{props.details.rating}</Text>
            <Text style={style.experienceText}>Nota geral</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <View style={style.containerDescription}>
        <Text style={style.description}>{props.details.description}</Text>
      </View>
    </View>
  );
};
