import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { ProfessionalModel } from '../../models/professional.model';
import { CardProfessional } from '../CardProfessional';
import { CardProfessionalStyle } from './style';

export interface CardProfessionalListProps {
  items: ProfessionalModel[];
  onPress?: (value: string) => void;
}

export const CardProfessionalList: FC<CardProfessionalListProps> = (props): JSX.Element => {
  return (
    <View style={CardProfessionalStyle.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={CardProfessionalStyle.scroll}>
        {props.items.map((item: ProfessionalModel, index: number) => {
          return (
            <View key={item.id} style={CardProfessionalStyle.item}>
              <CardProfessional details={item} onPress={props.onPress} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
