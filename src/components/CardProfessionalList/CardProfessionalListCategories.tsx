import React, { FC } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { CategoryModel } from '../../models/category.model';
import { CardProfessionalCategoriesStyle } from './style';

export interface CardProfessionalListCategories {
  categories: CategoryModel[];
}

export const CardProfessionalListCategories: FC<CardProfessionalListCategories> = (
  props,
): JSX.Element => {
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={CardProfessionalCategoriesStyle.container}>
        {props.categories.map((x: CategoryModel, index: number) => {
          return (
            <TouchableOpacity
              key={x.id}
              activeOpacity={0.7}
              style={CardProfessionalCategoriesStyle.item}>
              <Text>{x.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};
