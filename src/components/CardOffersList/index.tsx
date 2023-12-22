import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { OfferModel } from '../../models/offer.model';
import { CardOffers } from '../CardOffers';
import { CardOffersListStyle } from './style';

export interface CardProfessionalListProps {
  items: OfferModel[];
  onPress?: (value: string) => void;
}

export const CardOffersList: FC<CardProfessionalListProps> = (props): JSX.Element => {
  return (
    <View style={CardOffersListStyle.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={CardOffersListStyle.scroll}>
        {props.items.map((item: OfferModel, index: number) => {
          return (
            <View key={item.id} style={CardOffersListStyle.item}>
              <CardOffers details={item} onPress={props.onPress} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
