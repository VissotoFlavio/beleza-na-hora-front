import React, { FC } from 'react';
import { Text, View } from 'react-native';
import {
  CategoriesProfessionalDetails,
  ProfessionalDetailsModel,
  SubCategoriesProfessionalDetails,
} from '../../models/Professional/details.professional.model';
import { StyleProfessionalDetailsCardCategories as style } from './ProfessionalDetailsCardCategories.style';

export interface ProfessionalDetailsCardCategoriesProps {
  details: ProfessionalDetailsModel;
}

export const ProfessionalDetailsCardCategories: FC<ProfessionalDetailsCardCategoriesProps> = (
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
      {props.details.categories.map((category: CategoriesProfessionalDetails, index: number) => {
        return (
          <View key={category.id}>
            <Text>{category.name}</Text>
            {category.subCategories.map(
              (subCategory: SubCategoriesProfessionalDetails, indexSub: number) => {
                return (
                  <View key={subCategory.id}>
                    <Text>{subCategory.name}</Text>
                    <Text>{subCategory.numberOfServices}</Text>
                  </View>
                );
              },
            )}
          </View>
        );
      })}
    </View>
  );
};
