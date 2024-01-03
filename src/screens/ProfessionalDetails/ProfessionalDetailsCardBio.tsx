import React, { FC, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ExpandableView } from '../../components/ExpandableView';
import { RatingStar } from '../../components/RatingStar';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { StyleProfessionalDetailsCardBio as style } from './ProfessionalDetailsCardBio.style';

export interface ProfessionalDetailsCardBioProps {
  details: ProfessionalDetailsModel;
}

export const ProfessionalDetailsCardBio: FC<ProfessionalDetailsCardBioProps> = (
  props,
): JSX.Element => {
  const [showDetailsToggle, setShowDetailsToggle] = useState(false);

  const formatNumberServices = (value: number): string => {
    return '1.2 K';
  };

  const formatWorkingSice = (value: number): string => {
    return 'Janeiro/2022';
  };

  const handlePressShowDetails = () => {
    setShowDetailsToggle((prev) => !prev);
  };

  return (
    <View style={style.container}>
      <View style={style.containerPrincipal}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            alt={props.details.firstName}
            source={{
              uri: props.details.imageUrl,
            }}
          />
        </View>
        <View style={style.infoContainer}>
          <View style={style.ratingContainer}>
            <RatingStar value={props.details.rating ?? 0} size="lg" />
            <Text style={style.ratingText}>({props.details.rating})</Text>
          </View>
          <View style={style.nameContainer}>
            <Text style={style.nameText}>
              {props.details.firstName + ' ' + props.details.lastName}
            </Text>
          </View>
          <View style={style.experienceContainer}>
            <Text style={style.experienceValue}>
              {props.details && formatNumberServices(props.details.numberOfServices)}
            </Text>
            <Text style={style.experienceText}>Serviços realizados</Text>
          </View>
          <View style={style.specialityContainer}>
            <Text style={style.specialityText}>{props.details.specialty}</Text>
          </View>
        </View>
      </View>
      <View style={style.iconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={handlePressShowDetails}>
          {showDetailsToggle ? (
            // <ArrowUp size={24} style={style.iconArrow} />
            <Text style={style.deatilsToggle}>Ver menos</Text>
          ) : (
            <Text style={style.deatilsToggle}>Ver mais</Text>
            // <ArrowDown size={24} style={style.iconArrow} />
          )}
        </TouchableOpacity>
      </View>
      <ExpandableView expanded={showDetailsToggle}>
        <View style={style.containerSecondary}>
          <View style={style.sinceContainer}>
            <Text>Iniciou no app:</Text>
            <Text style={style.sinceValue}>{formatWorkingSice(props.details.workingSince)}</Text>
          </View>
          <View>
            <Text>{props.details.description}</Text>
          </View>
        </View>
      </ExpandableView>
    </View>
  );
};
