import { Star } from 'lucide-react-native';
import React, { FC } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { BoxContent } from '../../components/BoxContent';
import { ViewRow } from '../../components/ViewRow';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { StyleColor, StyleFont } from '../../theme';
import { ProfessionalBioStyle } from './ProfessionalBio.style';

export interface ProfessionalBioPros {
  details: ProfessionalDetailsModel;
}

export const ProfessionalBio: FC<ProfessionalBioPros> = ({ details }): JSX.Element => {
  return (
    <View style={ProfessionalBioStyle.container}>
      {/* Foto e Imagem de fundo */}
      <ImageBackground
        style={ProfessionalBioStyle.imageBg}
        alt="imagem de fundo"
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2am9i1nPf0WgyowHecTS4-n70om_t0WHTA&usqp=CAU',
        }}>
        <BoxContent>
          <Image
            style={ProfessionalBioStyle.imageProfile}
            alt="Foto de perfil"
            source={{
              uri: details.imageUrl,
            }}
          />
        </BoxContent>
      </ImageBackground>
      {/* Nome e Especialidade */}
      <BoxContent style={ProfessionalBioStyle.nameAndSpecialtyContainer}>
        <View>
          <Text style={ProfessionalBioStyle.name}>
            {details.firstName + ' ' + details.lastName}
          </Text>
          <Text style={ProfessionalBioStyle.specialty}>{details.specialty}</Text>
        </View>
      </BoxContent>
      {/* Notas e serviços */}
      <BoxContent style={ProfessionalBioStyle.highlightBox}>
        <View style={ProfessionalBioStyle.highlightBoxContent}>
          <Text style={ProfessionalBioStyle.highlightBoxText}>Avaliação</Text>
          <ViewRow>
            <Star size={StyleFont.size['4xl']} fill={StyleColor.yellow[400]} />
            <Text style={ProfessionalBioStyle.highlightBoxValue}>{details.rating}</Text>
          </ViewRow>
        </View>
        <View style={ProfessionalBioStyle.highlightBoxContent}>
          <Text style={ProfessionalBioStyle.highlightBoxText}>Serviços</Text>
          <Text style={ProfessionalBioStyle.highlightBoxValue}>
            {details.numberOfServices.formatNumber()}
          </Text>
        </View>
      </BoxContent>
      {/* Descrição */}
      <BoxContent>
        <Text style={ProfessionalBioStyle.descriptionText}>{details.description}</Text>
      </BoxContent>
    </View>
  );
};
