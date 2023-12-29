import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { ProfessionalModel } from '../../models/Professional/professional.model';
import { CardProfessional } from '../CardProfessional';
import { CardProfessionalStyle } from './style';

export interface CardProfessionalListProps {
  professionals: ProfessionalModel[];
  onPress?: (value: string) => void;
}

export const CardProfessionalListProfessionals: FC<CardProfessionalListProps> = (
  props,
): JSX.Element => {
  const handlePressProfessional = (value: string) => {
    if (props.onPress) {
      props.onPress(value);
    }
  };
  return (
    <View style={CardProfessionalStyle.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={CardProfessionalStyle.scroll}>
        {props.professionals.map((item: ProfessionalModel, index: number) => {
          return (
            <View key={item.id} style={CardProfessionalStyle.item}>
              <CardProfessional details={item} onPress={handlePressProfessional} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
