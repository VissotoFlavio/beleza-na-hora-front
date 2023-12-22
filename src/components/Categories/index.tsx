import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CategoryModel } from '../../models/category.model';
import { StyleCategories } from './style';

export interface CategoriesProps {
  categories?: CategoryModel[];
  activeCategory?: string;
  onPress?: (value: string) => void;
}

export const Categories: FC<CategoriesProps> = (props): JSX.Element => {
  const handlePress = (value: string): void => {
    if (props.onPress) {
      props.onPress(value);
    }
  };

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={StyleCategories.scroll}>
        {props.categories?.map((item: CategoryModel, index: number) => {
          const isActive = item.id === props.activeCategory;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => handlePress(item.id)}
              style={[StyleCategories.item]}>
              <View>
                <Image
                  alt={item.description}
                  style={[StyleCategories.img, isActive ? StyleCategories.activated : null]}
                  source={item.imageUrl}
                />
              </View>
              <Text style={StyleCategories.description}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
